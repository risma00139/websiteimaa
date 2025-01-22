<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nilai_ujian";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$nama = $_POST['nama'];
$nilai = $_POST['nilai'];

$sql = "INSERT INTO siswa (nama, nilai) VALUES ('$nama', '$nilai')";
if ($conn->query($sql) === TRUE) {
    echo "Nilai berhasil ditambahkan";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
