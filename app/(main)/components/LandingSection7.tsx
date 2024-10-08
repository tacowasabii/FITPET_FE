import Image from "next/image";

export default function LandingSection7() {
  return (
    <section className="flex w-full flex-col items-center bg-grayscale-15">
      <div className="relative w-full px-4 desktop:w-[1080px] desktop:px-6">
        <Image
          src="/assets/DOG_smile.webp"
          alt="Review 1 Top DOG Image"
          width={248}
          height={250}
          className="absolute left-1/2 top-[70px] z-0 h-[64px] w-[64px] -translate-x-1/2 transform desktop:left-4 desktop:top-[175px] desktop:h-[248px] desktop:w-[250px] desktop:translate-x-0"
        />
        <p className="pt-[140px] text-center font-paperlogy-heading text-[24px] text-grayscale-100 desktop:pt-[202px] desktop:text-[40px]">
          반려인들의 <br />
          실제 리뷰를 확인해보세요
        </p>
        <div className="mt-[72px] flex space-x-[16px] overflow-hidden tablet:justify-center">
          {/* 리뷰 1 */}
          <div className="flex h-[240px] w-[240px] shrink-0 flex-col rounded-2xl bg-grayscale-00 px-6 py-5 font-paperlogy-title shadow-lg tablet:h-[268px] tablet:w-[240px] desktop:w-[328px]">
            <div className="z-10 flex flex-col items-start">
              <Image
                src="/assets/star_review.webp"
                alt="Star Review"
                width={120}
                height={24}
                className="mb-4"
              />
              <div>
                <p className="font-medium text-grayscale-100 tablet:text-[16px] desktop:text-[24px]">
                  김레오
                </p>
                <p className="text-[12px] text-grayscale-60 desktop:text-sm">
                  닥스훈트 (0살, 여자아이)
                </p>
              </div>
            </div>
            <div className="my-4 border-t border-grayscale-10" />
            <p className="text-[14px] font-regular text-grayscale-80 desktop:text-[16px]">
              펫보험 가입하고 5일만에 물림사고가 있었는데 상해라서 30일 기다리지
              않고 바로 보상받을 수 있더라고요. 보상신청도 대신 해주셔서
              편했어요.
            </p>
          </div>
          {/* 리뷰 2 */}
          <div className="flex h-[240px] w-[240px] shrink-0 flex-col rounded-2xl bg-grayscale-00 px-6 py-5 font-paperlogy-title shadow-lg tablet:h-[268px] tablet:w-[240px] desktop:w-[328px]">
            <div className="flex flex-col items-start">
              <Image
                src="/assets/star_review.webp"
                alt="Star Review"
                width={120}
                height={24}
                className="mb-4"
              />
              <div>
                <p className="font-medium text-grayscale-100 tablet:text-[16px] desktop:text-[24px]">
                  박우유
                </p>
                <p className="text-[12px] text-grayscale-60 desktop:text-sm">
                  코리안숏헤어 (0살, 여자아이)
                </p>
              </div>
            </div>
            <div className="my-4 border-t border-grayscale-10" />
            <p className="text-[14px] font-regular text-grayscale-80 desktop:text-[16px]">
              펫보험은 계속 알아보고 있었는데... 보험사 하나하나 금액 확인하기
              어려웠는데 비교견적서를 보내주셔서 결정하기 쉬웠어요.
            </p>
          </div>
          {/* 리뷰 3 */}
          <div className="hidden h-[240px] w-[240px] shrink flex-col rounded-2xl bg-grayscale-00 px-6 py-5 font-paperlogy-title shadow-lg tablet:flex tablet:h-[268px] tablet:w-[240px] desktop:w-[328px]">
            <div className="flex flex-col items-start">
              <Image
                src="/assets/star_review.webp"
                alt="Star Review"
                width={120}
                height={24}
                className="mb-4"
              />
              <div>
                <p className="font-medium text-grayscale-100 tablet:text-[16px] desktop:text-[24px]">
                  이토리
                </p>
                <p className="text-[12px] text-grayscale-60 desktop:text-sm">
                  웰시코기 (4살, 남자아이)
                </p>
              </div>
            </div>
            <div className="my-4 border-t border-grayscale-10" />
            <p className="text-[14px] font-regular text-grayscale-80 desktop:text-[16px]">
              보험사마다 문의해봐도 가격도 차이나고, 보장 내용도 달라서 이해가
              잘 안 됐는데, 웰시코기한테 가장 합리적인 보험상품을 추천해줘서
              좋았어요.
            </p>
          </div>
        </div>
        <div className="mt-[160px] flex flex-col items-center">
          <div className="absoulte w-[360px] justify-start">
            <Image
              src="/assets/gift.webp"
              alt="Gift Image"
              width={228}
              height={220}
              className="h-[88px] w-[96px] desktop:h-[220px] desktop:w-[228px]"
            />
          </div>
          <p className="mt-10 text-center font-paperlogy-heading text-[24px] text-grayscale-100 desktop:text-[40px]">
            지금 가입하면 <br />
            우리아이를 위한 선물을 드려요!
          </p>
          <Image
            src="/assets/DOG_gift.webp"
            alt="Dog Gift Image"
            width={660}
            height={498}
            className="mb-[140px] mt-[100px] h-[240px] w-[318px] desktop:h-[498px] desktop:w-[660px]"
          />
        </div>
      </div>
    </section>
  );
}
