import Image from "next/image";
import React from "react";
import styles from "../styles/login.module.css";
export default function login() {
  return (
    <div className="layout">
      <div className={styles.container}>
        <div className={styles.wrap_img}>
          <Image
            src="/img_banner_auth.png"
            width={600}
            height={600}
            layout="responsive"
            alt="Image Banner "
            loading="eager"
          />
        </div>
        <div className={styles.form_login}>
          <div className={styles.logo_form}>logo</div>
          <div className={styles.title_form}>Đăng nhập</div>
          <div className={styles.input_form}>input</div>
          <div className={styles.input_form}>input</div>
          <span className={styles.text_foget_password}>Quên mật khẩu?</span>
          <div className={styles.button_form}>
            <button>Đăng nhập</button>
          </div>
          <span>Bạn chưa có tài khoản? </span>
        </div>
      </div>
    </div>
  );
}
