const Footer = () => {
  return (
    <footer className="w-full bg-footer-1 mt-16 pt-[54px] pb-[54px] px-4 sm:px-6 lg:px-[160px] lg:pr-[56px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-0 justify-start items-start sm:items-center">
          <span className="text-[11px] font-light leading-[17px] text-global-1">
            会員登録
          </span>
          <span className="text-[11px] font-light leading-[17px] text-global-1 sm:ml-[44px]">
            運営会社
          </span>
          <span className="text-[11px] font-light leading-[17px] text-global-1 sm:ml-[44px]">
            利用規約
          </span>
          <span className="text-[11px] font-light leading-[17px] text-global-1 sm:ml-[44px]">
            個人情報の取扱について
          </span>
          <span className="text-[11px] font-light leading-[17px] text-global-1 sm:ml-[46px]">
            特定商取引法に基づく表記
          </span>
          <span className="text-[11px] font-light leading-[17px] text-global-1 sm:ml-[44px]">
            お問い合わせ
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;