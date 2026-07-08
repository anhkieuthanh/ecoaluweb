<?php
/**
 * GitHub OAuth Server Gateway in PHP for Decap CMS
 * Đặt file này tại public/admin/auth.php trong dự án Next.js của bạn.
 * Sau khi build, file sẽ tự động nằm ở /admin/auth.php và chạy trên cPanel.
 */

// --- CẤU HÌNH THÔNG TIN GITHUB OAUTH APP ---
// Bạn cần tạo một OAuth App trên tài khoản GitHub của mình:
// GitHub -> Settings -> Developer Settings -> OAuth Apps -> New OAuth App
// - Homepage URL: https://yourdomain.com
// - Authorization callback URL: https://yourdomain.com/admin/auth.php
define('CLIENT_ID', 'Ov23lidDmC1amFQpBk5D');
define('CLIENT_SECRET', '10b45107b200219468417b73f004f9049fb15b28');

// Bắt đầu Session để lưu trữ state bảo mật
session_start();

$provider = isset($_GET['provider']) ? $_GET['provider'] : 'github';

if ($provider !== 'github') {
    die("Nhà cung cấp xác thực không được hỗ trợ.");
}

// BƯỚC 1: Nếu chưa có mã Code từ GitHub, chuyển hướng người dùng sang trang đăng nhập của GitHub
if (!isset($_GET['code'])) {
    $state = bin2hex(random_bytes(16));
    $_SESSION['oauth_state'] = $state;

    // Chuyển hướng sang GitHub
    $authorizeUrl = 'https://github.com/login/oauth/authorize?' . http_build_query([
        'client_id' => CLIENT_ID,
        'scope' => 'repo,user',
        'state' => $state
    ]);

    header('Location: ' . $authorizeUrl);
    exit;
}

// BƯỚC 2: Khi GitHub redirect quay lại kèm theo mã ?code=...
if (empty($_GET['state']) || ($_GET['state'] !== $_SESSION['oauth_state'])) {
    unset($_SESSION['oauth_state']);
    die("Xác thực State thất bại. Vui lòng thử đăng nhập lại.");
}

unset($_SESSION['oauth_state']);
$code = $_GET['code'];

// Gửi yêu cầu POST tới GitHub để đổi Code lấy Access Token
$tokenUrl = 'https://github.com/login/oauth/access_token';
$postData = [
    'client_id' => CLIENT_ID,
    'client_secret' => CLIENT_SECRET,
    'code' => $code
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $tokenUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Accept: application/json',
    'User-Agent: PHP-OAuth-Gateway'
]);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    die("Lỗi kết nối API GitHub: " . curl_error($ch));
}
curl_close($ch);

$data = json_decode($response, true);

if (!isset($data['access_token'])) {
    $err = isset($data['error_description']) ? $data['error_description'] : 'Không lấy được access token';
    die("Lỗi xác thực từ GitHub: " . $err);
}

$token = $data['access_token'];

// BƯỚC 3: Trả kết quả Token về cho cửa sổ chính chứa Decap CMS đang mở
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Đang xác thực...</title>
</head>
<body>
    <div style="text-align: center; margin-top: 100px; font-family: sans-serif; color: #475569;">
        <p>Đang kết nối với trang quản trị, vui lòng đợi trong giây lát...</p>
    </div>
    <script>
        (function() {
            var token = "<?php echo addslashes($token); ?>";
            var message = "authorization:github:success:" + JSON.stringify({
                token: token,
                provider: "github"
            });
            
            // Gửi Token về cho cửa sổ cha (Decap CMS)
            if (window.opener) {
                window.opener.postMessage("authorizing:github", "*");
                window.opener.postMessage(message, "*");
                window.close();
            } else {
                document.body.innerHTML = "<div style='text-align: center; margin-top: 100px; font-family: sans-serif; color: green;'><p>Xác thực thành công! Bạn có thể đóng cửa sổ này và quay lại trang quản trị.</p></div>";
            }
        })();
    </script>
</body>
</html>
