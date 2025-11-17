import svgPaths from "./svg-jdvhvyltx2";
import imgImage from "figma:asset/5a4d1faf8482073e50699ba573bf5dd90ccfdb2b.png";

function Footer() {
  return (
    <div className="relative size-full" data-name="Footer">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start px-10 py-0 relative size-full">
          <div
            aria-label="Woman dancing"
            className="bg-[position:0%_0%,_50%_50%] bg-gradient-to-b bg-size-[auto,cover] box-border content-stretch flex flex-col from-[#00000000] gap-[330px] h-[573px] items-center justify-center max-w-[1500px] p-0 relative rounded-tl-[30px] rounded-tr-[30px] shrink-0 to-[#25252599] w-full"
            data-name="Image"
            style={{ backgroundImage: `url('${imgImage}')` }}
          >
            <div
              className="box-border content-stretch flex gap-10 h-10 items-center justify-center p-0 relative shrink-0"
              data-name="Content"
            >
              <a
                aria-label="tiktok-icon"
                className="block cursor-pointer relative shrink-0 size-7"
                data-name="Social link 1"
                href="https://www.tiktok.com/@biancamarceela"
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                  <g id="Social link 1">
                    <path
                      d={svgPaths.p2f183340}
                      id="Vector"
                      stroke="var(--stroke-0, #F7F7F7)"
                      strokeLinecap="square"
                      strokeWidth="2.2"
                    />
                  </g>
                </svg>
              </a>
              <a
                aria-label="instagram-icon"
                className="block cursor-pointer relative shrink-0 size-6"
                data-name="Social link 2"
                href="https://www.instagram.com/biancamarceela/"
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g clipPath="url(#clip0_20_154)" id="Social link 2">
                    <path d={svgPaths.p3c382d72} fill="var(--fill-0, #F7F7F7)" id="Vector" />
                  </g>
                  <defs>
                    <clipPath id="clip0_20_154">
                      <rect fill="white" height="24" width="24" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <div className="relative shrink-0 size-[26px]" data-name="Social link 3">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                  <g id="Social link 3">
                    <path d={svgPaths.p7095600} fill="var(--fill-0, #F7F7F7)" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-col gap-2.5 items-center justify-end p-0 relative shrink-0"
              data-name="Inner Content"
            >
              <div className="font-['Caprasimo:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#f7f7f7] text-[117.032px] text-nowrap tracking-[-7.0219px]">
                <p className="adjustLetterSpacing block leading-[0.92] whitespace-pre">BM.</p>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-[154px] items-center justify-center p-0 relative shrink-0 w-full"
                data-name="Content"
              >
                <div className="font-['Outfit:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#f7f7f7] text-[16px] text-center text-nowrap tracking-[-0.4px]">
                  <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                    JOINVILLE • ⁠ SC
                    <br aria-hidden="true" />
                    BRASIL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Footer1() {
  return (
    <div className="relative size-full" data-name="Footer">
      <Footer />
    </div>
  );
}