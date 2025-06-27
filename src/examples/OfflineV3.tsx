import React from "react";
import { BasicButtonContained } from "../ui/primitives/BasicButtonContained/BasicButtonContained";

// 图片资源
const imgVector = "http://localhost:3845/assets/0da56ff199043e551b0baca8c1ca90fa7da86bc1.svg";
const imgNetworkSignalLight = "http://localhost:3845/assets/8b25f369429a5810f76f255397520a9e1bfa5ab3.svg";
const imgWiFiSignalLight = "http://localhost:3845/assets/fdf4f7d5aca9029a70822aca005f4049af5b15c7.svg";
const imgBatteryLight = "http://localhost:3845/assets/603c2261e9a5a26b98325dd3d82949ae7993c193.svg";
const img1 = "http://localhost:3845/assets/537e889ec047ed12597d756b175ef05bd5e54c1d.svg";
const imgFrame = "http://localhost:3845/assets/0ac06a101a611a02a7dfee38dd4e8d9eff0bb889.svg";
const imgGroup = "http://localhost:3845/assets/4cc46e0571fd542f3a883c7d027a5e80029fa81a.svg";
const imgGroup1 = "http://localhost:3845/assets/dfad96179d12aaf26912eba3b15bfed21596f1e1.svg";
const imgGroup186 = "http://localhost:3845/assets/506152fe8d7ff53414d6413b9c6156073fd6f76b.svg";
const img = "http://localhost:3845/assets/8941ea319f3fe7d6ef8ac8891a4642d446265f69.svg";
const img2 = "http://localhost:3845/assets/20bbfd0525d282d0f70e61da562c3772a466794e.svg";
const img3 = "http://localhost:3845/assets/5ece49bbee204adb0df129c6fb7aa7f8b25b8b6f.svg";
const imgLine314 = "http://localhost:3845/assets/ada672e06db36e3e5cbfba37d382a9e0afff2faa.svg";
const img4 = "http://localhost:3845/assets/a4a735f9148a8bf74f447a540f400399e50211cd.svg";

export default function OfflineV3() {
  return (
    <div
      className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#ffea64] gap-36 items-center justify-start p-0 relative size-full to-[#f6f8fa] to-[51.539%]"
      data-name="OfflineV3"
      id="node-6489_70770"
    >
      <div
        className="box-border content-stretch flex flex-col gap-7 items-center justify-start p-0 relative shrink-0 w-full"
        id="node-6489_70769"
      >
        {/* 顶部状态栏 */}
        <div
          className="relative shrink-0 w-full"
          data-name="顶部"
          id="node-6489_70760"
        >
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-col gap-[42px] items-start justify-start pb-3 pl-10 pr-[13px] pt-10 relative w-full">
              <div
                className="h-8 relative shrink-0 w-full"
                id="node-6489_70723"
              >
                <div className="flex flex-row items-center relative size-full">
                  <div className="box-border content-stretch flex flex-row h-8 items-center justify-between pl-10 pr-12 py-0 relative w-full">
                    <div
                      className="h-6 relative shrink-0 w-[61.524px]"
                      data-name="Vector"
                      id="node-6489_70683"
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={imgVector}
                      />
                    </div>
                    <div
                      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-end p-0 relative shrink-0"
                      data-name="Auto Layout Horizontal"
                      id="node-6489_70684"
                    >
                      <div
                        className="h-8 relative shrink-0 w-[45px]"
                        data-name="Network Signal / Light"
                        id="node-6489_70685"
                      >
                        <img
                          alt=""
                          className="block max-w-none size-full"
                          src={imgNetworkSignalLight}
                        />
                      </div>
                      <div
                        className="h-[31px] relative shrink-0 w-[34px]"
                        data-name="WiFi Signal / Light"
                        id="node-6489_70694"
                      >
                        <img
                          alt=""
                          className="block max-w-none size-full"
                          src={imgWiFiSignalLight}
                        />
                      </div>
                      <div
                        className="h-[31px] relative shrink-0 w-14"
                        data-name="Battery / Light"
                        id="node-6489_70698"
                      >
                        <img
                          alt=""
                          className="block max-w-none size-full"
                          src={imgBatteryLight}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
                id="node-6489_70759"
              >
                <div
                  className="h-10 relative shrink-0 w-[300.927px]"
                  data-name="_图层_1"
                  id="node-6489_70725"
                >
                  <img alt="" className="block max-w-none size-full" src={img1} />
                </div>
                <div
                  className="h-[62px] relative shrink-0 w-[167px]"
                  data-name="Frame"
                  id="node-6489_70708"
                >
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={imgFrame}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 主要内容区域 */}
        <div
          className="box-border content-stretch flex flex-col gap-[72px] items-center justify-start p-0 relative shrink-0 w-[670px]"
          id="node-6489_70768"
        >
          {/* 汇款信息卡片 */}
          <div
            className="backdrop-blur-[25px] backdrop-filter bg-gradient-to-b from-[#ffffffcc] relative rounded-3xl shrink-0 to-[#ffffff] w-full"
            id="node-6489_70766"
          >
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pb-24 pt-[72px] px-14 relative w-full">
                <div
                  className="box-border content-stretch flex flex-col gap-[178px] items-start justify-start p-0 relative shrink-0 w-[558px]"
                  id="node-6489_70764"
                >
                  {/* 顶部品牌和标题 */}
                  <div
                    className="box-border content-stretch flex flex-col gap-14 items-start justify-start p-0 relative shrink-0 w-[448px]"
                    id="node-6489_70761"
                  >
                    <div
                      className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full"
                      id="node-6489_70528"
                    >
                      <div
                        className="box-border content-stretch flex flex-row gap-[22px] items-center justify-start p-0 relative shrink-0"
                        id="node-6489_70529"
                      >
                        <div
                          className="box-border content-stretch flex flex-row gap-[25.503px] h-12 items-center justify-start p-0 relative shrink-0 w-[136px]"
                          id="node-6489_70544"
                        >
                          <div
                            className="h-[31.879px] relative shrink-0 w-[135.713px]"
                            id="node-6489_70545"
                          >
                            <div
                              className="absolute bottom-[0.304%] left-0 right-[59.042%] top-[-0.003%]"
                              data-name="Group"
                              id="node-6489_70546"
                            >
                              <div className="absolute bottom-0 left-0 right-0 top-0">
                                <img
                                  alt=""
                                  className="block max-w-none size-full"
                                  src={imgGroup}
                                />
                              </div>
                            </div>
                            <div
                              className="absolute bottom-[0.004%] left-[45.2%] right-[-0.002%] top-[-0.001%]"
                              data-name="Group"
                              id="node-6489_70549"
                            >
                              <img
                                alt=""
                                className="block max-w-none size-full"
                                src={imgGroup1}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="h-8 relative shrink-0 w-[35px]"
                          id="node-6489_70563"
                        >
                          <div className="relative size-full">
                            <div className="box-border content-stretch flex flex-col gap-2.5 h-8 items-start justify-start pb-0 pt-2 px-0 relative w-[35px]">
                              <div
                                className="h-3.5 relative shrink-0 w-[35.511px]"
                                id="node-6489_70564"
                              >
                                <img
                                  alt=""
                                  className="block max-w-none size-full"
                                  src={imgGroup186}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="h-[47.954px] relative shrink-0 w-[122.116px]"
                          data-name="_编辑图层"
                          id="node-6489_70530"
                        >
                          <img
                            alt=""
                            className="block max-w-none size-full"
                            src={img}
                          />
                        </div>
                      </div>
                      <div
                        className="css-orcezp font-['PingFang_SC:Semibold',_sans-serif] leading-[97px] min-w-full not-italic relative shrink-0 text-[85px] text-[rgba(0,0,0,0.88)] text-left"
                        id="node-6489_70569"
                        style={{ width: "min-content" }}
                      >
                        <p className="block mb-0">西联汇款</p>
                        <p className="block">至微信</p>
                      </div>
                    </div>
                    <div
                      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0"
                      id="node-6489_70570"
                    >
                      <div
                        className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
                        id="node-6489_70571"
                      >
                        <div
                          className="relative shrink-0 size-8"
                          data-name="public/location"
                          id="node-6489_70572"
                        >
                          <div
                            className="absolute bottom-[4.28%] left-[14.583%] right-[14.583%] top-[8.333%]"
                            data-name="形状"
                            id="node-I6489_70572-121_349"
                          >
                            <img
                              alt=""
                              className="block max-w-none size-full"
                              loading="lazy"
                              src={img2}
                            />
                          </div>
                        </div>
                        <div
                          className="font-['PingFang_SC:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[28px] text-[rgba(0,0,0,0.64)] text-nowrap text-right"
                          id="node-6489_70573"
                        >
                          <p className="block leading-[40px] whitespace-pre">
                            宏茂桥 Ang Mo Kio
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 汇率信息和按钮 */}
                  <div
                    className="box-border content-stretch flex flex-col gap-20 items-center justify-start p-0 relative shrink-0 w-full"
                    id="node-6489_70762"
                  >
                    <div
                      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-[559px]"
                      id="node-6489_70514"
                    >
                      <div
                        className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-[266px]"
                        id="node-6489_70516"
                      >
                        <div
                          className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
                          id="node-6489_70517"
                        >
                          <div
                            className="font-['PingFang_SC:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[34px] text-[rgba(0,0,0,0.88)] text-left text-nowrap"
                            id="node-6489_70518"
                          >
                            <p className="block leading-[48px] whitespace-pre">
                              最优汇率
                            </p>
                          </div>
                          <div
                            className="relative shrink-0 size-10"
                            data-name="public/info"
                            id="node-6489_70519"
                          >
                            <div
                              className="absolute inset-[8.333%]"
                              data-name="形状"
                              id="node-I6489_70519-121_104"
                            >
                              <img
                                alt=""
                                className="block max-w-none size-full"
                                loading="lazy"
                                src={img3}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="font-['WeChat_Sans_SS:Medium',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[56px] text-[rgba(0,0,0,0.88)] text-left"
                          id="node-6489_70520"
                          style={{ width: "min-content" }}
                        >
                          <p className="block leading-[64px]">5.3970444</p>
                        </div>
                      </div>
                      <div
                        className="bg-[rgba(0,0,0,0.16)] h-[104px] shrink-0 w-px"
                        id="node-6489_70515"
                      />
                      <div
                        className="box-border content-stretch flex flex-col gap-4 items-start justify-start leading-[0] p-0 relative shrink-0 w-[204px]"
                        id="node-6489_70521"
                      >
                        <div
                          className="font-['PingFang_SC:Semibold',_sans-serif] min-w-full not-italic relative shrink-0 text-[0px] text-[rgba(0,0,0,0.88)] text-left"
                          id="node-6489_70522"
                          style={{ width: "min-content" }}
                        >
                          <p className="leading-[48px] text-[34px]">
                            <span className="font-['PingFang_SC:Semibold',_sans-serif]">
                              手续费
                            </span>
                            <span className="css-mbd08l font-['PingFang_SC:Regular',_sans-serif]">{` (新元)`}</span>
                          </p>
                        </div>
                        <div
                          className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
                          id="node-6489_70523"
                        >
                          <div
                            className="[grid-area:1_/_1] font-['WeChat_Sans_SS:Medium',_sans-serif] leading-[0] ml-0 mt-0 not-italic relative text-[56px] text-[rgba(0,0,0,0.88)] text-left text-nowrap"
                            id="node-6489_70524"
                          >
                            <p className="block leading-[64px] whitespace-pre">
                              0
                            </p>
                          </div>
                          <div
                            className="[grid-area:1_/_1] font-['WeChat_Sans_SS:Medium',_sans-serif] leading-[0] ml-12 mt-3 not-italic relative text-[40px] text-[rgba(0,0,0,0.4)] text-left text-nowrap"
                            id="node-6489_70525"
                          >
                            <p className="block leading-[48px] whitespace-pre">
                              20.00
                            </p>
                          </div>
                          <div
                            className="[grid-area:1_/_1] h-0 ml-12 mt-[37px] relative w-[102px]"
                            id="node-6489_70526"
                          >
                            <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
                              <img
                                alt=""
                                className="block max-w-none size-full"
                                loading="lazy"
                                src={imgLine314}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <BasicButtonContained
                      type="primary"
                      size="large"
                      state="normal"
                      text="填写电子汇款单"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_0px_0px_inset_#ffffff]" />
          </div>

          {/* 底部导航菜单 */}
          <div className="relative shrink-0" id="node-6489_70575">
            <div className="flex flex-row items-center justify-center relative size-full">
              <div className="box-border content-stretch flex flex-row gap-8 items-center justify-center px-3 py-0 relative">
                <div
                  className="font-['PingFang_SC:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[34px] text-[rgba(0,0,0,0.64)] text-center text-nowrap"
                  id="node-6489_70576"
                >
                  <p className="block leading-[48px] whitespace-pre">
                    汇款记录
                  </p>
                </div>
                <div
                  className="bg-[rgba(0,0,0,0.16)] h-8 shrink-0 w-px"
                  id="node-6489_70577"
                />
                <div
                  className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
                  id="node-6489_70578"
                >
                  <div
                    className="font-['PingFang_SC:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[34px] text-[rgba(0,0,0,0.64)] text-center text-nowrap"
                    id="node-6489_70579"
                  >
                    <p className="block leading-[48px] whitespace-pre">
                      我的收款人
                    </p>
                  </div>
                </div>
                <div
                  className="bg-[rgba(0,0,0,0.16)] h-8 shrink-0 w-px"
                  id="node-6489_70581"
                />
                <div
                  className="font-['PingFang_SC:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[34px] text-[rgba(0,0,0,0.64)] text-center text-nowrap"
                  id="node-6489_70582"
                >
                  <p className="block leading-[48px] whitespace-pre">
                    常见问题
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部区域 */}
      <div
        className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 relative shrink-0 w-full"
        id="node-6489_70767"
      >
        <div
          className="font-['PingFang_SC:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.4)] text-center w-full"
          id="node-6489_70584"
        >
          <p className="block leading-[32px]">本服务由Tenpay Global提供</p>
        </div>
        <div
          className="h-[68px] relative shrink-0 w-full"
          data-name="03导航组件/05底部条"
          id="node-6489_70574"
        >
          <div
            className="absolute inset-0"
            data-name="01基础组件/01小组件/03白色背景"
            id="node-I6489_70574-894_2715"
          >
            <img
              alt=""
              className="block max-w-none size-full"
              loading="lazy"
              src={img4}
            />
          </div>
          <div className="absolute bottom-[23.529%] flex items-center justify-center left-[32.133%] right-[32.133%] top-[61.765%]">
            <div className="flex-none h-2.5 scale-y-[-100%] w-[268px]">
              <div
                className="bg-[#000000] rounded-[7.5px] size-full"
                data-name="Rectangle Copy"
                id="node-I6489_70574-894_2716"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 