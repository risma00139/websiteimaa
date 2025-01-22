<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nilai_ujian";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$id = $_GET['id'];

$sql = "DELETE FROM siswa WHERE id = $id";
if ($conn->query($sql) === TRUE) {
    echo "Nilai berhasil dihapus";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
