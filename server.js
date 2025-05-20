import React from "react";

export default function Login() {
    return (
        <div style={{ maxWidth: 400, margin: "120px auto 0", padding: 24, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <h2>Đăng nhập</h2>
            <form>
                <div style={{ marginBottom: 16 }}>
                    <label>Email</label>
                    <input type="email" required style={{ width: "100%", padding: 8, marginTop: 4 }} />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label>Mật khẩu</label>
                    <input type="password" required style={{ width: "100%", padding: 8, marginTop: 4 }} />
                </div>
                <button type="submit" style={{ width: "100%", padding: 10, background: "#e53935", color: "#fff", border: "none", borderRadius: 4 }}>Đăng nhập</button>
            </form>
        </div>
    );
}