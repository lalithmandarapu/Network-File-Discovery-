import socket
host="127.0.0.1"
port=65432
with socket.socket(socket.AF_INET,socket.SOCK_STREAM) as s:
    s.bind((host,port))
    s.listen()
    print(f"server is listening on {host}:{port}")
    conn , addr=s.accept()
    with conn:
        print(f"connected by:{host}")
    while True:
        data=conn.recv(1024).decode()
        if not data : break
        print("client:{data}")
        conn.sendall(input("you:").encode())

