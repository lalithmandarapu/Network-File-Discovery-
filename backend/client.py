import socket
host="127.0.0.1"
port=65432
with socket.socket(socket.AF_INET,socket.SOCK_STREAM) as s:
    s.connect((host,port))
    while True:
        s.sendall(input.encode())
        data=s.recv(1024).decode()
        if not data:break
        print(f"server:{data}")
