import React from 'react';

// 图片资源常量
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

const OffileV1: React.FC = () => {
  return (
    <div
      style={{
        width: '750px',
        height: '100vh',
        background: 'linear-gradient(180deg, #ffea64 0%, #f6f8fa 51.539%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '144px',
        padding: 0,
        position: 'relative',
        boxSizing: 'border-box',
        margin: '0 auto'
      }}
    >
      {/* 顶部区域 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          flexShrink: 0,
          boxSizing: 'border-box'
        }}
      >
        {/* 状态栏和标题栏 */}
        <div
          style={{
            width: '100%',
            position: 'relative',
            flexShrink: 0
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '42px',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                paddingTop: '40px',
                paddingLeft: '40px',
                paddingRight: '13px',
                paddingBottom: '12px',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              {/* 状态栏 */}
              <div
                style={{
                  height: '32px',
                  width: '100%',
                  position: 'relative',
                  flexShrink: 0
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      height: '32px',
                      paddingLeft: '40px',
                      paddingRight: '48px',
                      paddingTop: 0,
                      paddingBottom: 0,
                      width: '100%',
                      boxSizing: 'border-box'
                    }}
                  >
                    <div
                      style={{
                        height: '24px',
                        width: '61.524px',
                        position: 'relative',
                        flexShrink: 0
                      }}
                    >
                      <img
                        alt=""
                        style={{
                          display: 'block',
                          maxWidth: 'none',
                          width: '100%',
                          height: '100%'
                        }}
                        src={imgVector}
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '10px',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        position: 'relative',
                        flexShrink: 0,
                        boxSizing: 'border-box'
                      }}
                    >
                      <div
                        style={{
                          height: '32px',
                          width: '45px',
                          position: 'relative',
                          flexShrink: 0
                        }}
                      >
                        <img
                          alt=""
                          style={{
                            display: 'block',
                            maxWidth: 'none',
                            width: '100%',
                            height: '100%'
                          }}
                          src={imgNetworkSignalLight}
                        />
                      </div>
                      <div
                        style={{
                          height: '31px',
                          width: '34px',
                          position: 'relative',
                          flexShrink: 0
                        }}
                      >
                        <img
                          alt=""
                          style={{
                            display: 'block',
                            maxWidth: 'none',
                            width: '100%',
                            height: '100%'
                          }}
                          src={imgWiFiSignalLight}
                        />
                      </div>
                      <div
                        style={{
                          height: '31px',
                          width: '56px',
                          position: 'relative',
                          flexShrink: 0
                        }}
                      >
                        <img
                          alt=""
                          style={{
                            display: 'block',
                            maxWidth: 'none',
                            width: '100%',
                            height: '100%'
                          }}
                          src={imgBatteryLight}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 标题栏 */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  position: 'relative',
                  flexShrink: 0,
                  boxSizing: 'border-box'
                }}
              >
                <div
                  style={{
                    height: '40px',
                    width: '300.927px',
                    position: 'relative',
                    flexShrink: 0
                  }}
                >
                  <img
                    alt=""
                    style={{
                      display: 'block',
                      maxWidth: 'none',
                      width: '100%',
                      height: '100%'
                    }}
                    src={img1}
                  />
                </div>
                <div
                  style={{
                    height: '62px',
                    width: '167px',
                    position: 'relative',
                    flexShrink: 0
                  }}
                >
                  <img
                    alt=""
                    style={{
                      display: 'block',
                      maxWidth: 'none',
                      width: '100%',
                      height: '100%'
                    }}
                    src={imgFrame}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 主要内容区域 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '72px',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '670px',
            position: 'relative',
            flexShrink: 0,
            boxSizing: 'border-box'
          }}
        >
          {/* 白色卡片 */}
          <div
            style={{
              backdropFilter: 'blur(25px)',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, #ffffff 100%)',
              position: 'relative',
              borderRadius: '24px',
              flexShrink: 0,
              width: '100%',
              boxShadow: 'inset 0px 2px 0px 0px #ffffff'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                position: 'relative'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '10px',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  paddingTop: '72px',
                  paddingBottom: '96px',
                  paddingLeft: '56px',
                  paddingRight: '56px',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '178px',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    width: '558px',
                    position: 'relative',
                    flexShrink: 0,
                    boxSizing: 'border-box'
                  }}
                >
                  {/* 顶部内容 */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '56px',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      width: '448px',
                      position: 'relative',
                      flexShrink: 0,
                      boxSizing: 'border-box'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        width: '100%',
                        position: 'relative',
                        flexShrink: 0,
                        boxSizing: 'border-box'
                      }}
                    >
                      {/* Logo 区域 */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          gap: '22px',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          position: 'relative',
                          flexShrink: 0,
                          boxSizing: 'border-box'
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '25.503px',
                            height: '48px',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            width: '136px',
                            position: 'relative',
                            flexShrink: 0,
                            boxSizing: 'border-box'
                          }}
                        >
                          <div
                            style={{
                              height: '31.879px',
                              width: '135.713px',
                              position: 'relative',
                              flexShrink: 0
                            }}
                          >
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '0.304%',
                                left: 0,
                                right: '59.042%',
                                top: '-0.003%'
                              }}
                            >
                              <div style={{ position: 'absolute', inset: 0 }}>
                                <img
                                  alt=""
                                  style={{
                                    display: 'block',
                                    maxWidth: 'none',
                                    width: '100%',
                                    height: '100%'
                                  }}
                                  src={imgGroup}
                                />
                              </div>
                            </div>
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '0.004%',
                                left: '45.2%',
                                right: '-0.002%',
                                top: '-0.001%'
                              }}
                            >
                              <img
                                alt=""
                                style={{
                                  display: 'block',
                                  maxWidth: 'none',
                                  width: '100%',
                                  height: '100%'
                                }}
                                src={imgGroup1}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            height: '32px',
                            width: '35px',
                            position: 'relative',
                            flexShrink: 0
                          }}
                        >
                          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                height: '32px',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                paddingTop: '8px',
                                paddingBottom: 0,
                                paddingLeft: 0,
                                paddingRight: 0,
                                width: '35px',
                                boxSizing: 'border-box'
                              }}
                            >
                              <div
                                style={{
                                  height: '14px',
                                  width: '35.511px',
                                  position: 'relative',
                                  flexShrink: 0
                                }}
                              >
                                <img
                                  alt=""
                                  style={{
                                    display: 'block',
                                    maxWidth: 'none',
                                    width: '100%',
                                    height: '100%'
                                  }}
                                  src={imgGroup186}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            height: '47.954px',
                            width: '122.116px',
                            position: 'relative',
                            flexShrink: 0
                          }}
                        >
                          <img
                            alt=""
                            style={{
                              display: 'block',
                              maxWidth: 'none',
                              width: '100%',
                              height: '100%'
                            }}
                            src={img}
                          />
                        </div>
                      </div>

                      {/* 标题文字 */}
                      <div
                        style={{
                          fontFamily: "'PingFang SC', sans-serif",
                          fontWeight: 600,
                          lineHeight: '97px',
                          minWidth: '100%',
                          fontStyle: 'normal',
                          position: 'relative',
                          flexShrink: 0,
                          fontSize: '85px',
                          color: 'rgba(0,0,0,0.88)',
                          textAlign: 'left',
                          width: 'min-content'
                        }}
                      >
                        <p style={{ display: 'block', marginBottom: 0 }}>西联汇款</p>
                        <p style={{ display: 'block' }}>至微信</p>
                      </div>
                    </div>

                    {/* 位置信息 */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '16px',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        position: 'relative',
                        flexShrink: 0,
                        boxSizing: 'border-box'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          gap: '8px',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          position: 'relative',
                          flexShrink: 0,
                          boxSizing: 'border-box'
                        }}
                      >
                        <div
                          style={{
                            position: 'relative',
                            flexShrink: 0,
                            width: '32px',
                            height: '32px'
                          }}
                        >
                          <div
                            style={{
                              position: 'absolute',
                              bottom: '4.28%',
                              left: '14.583%',
                              right: '14.583%',
                              top: '8.333%'
                            }}
                          >
                            <img
                              alt=""
                              style={{
                                display: 'block',
                                maxWidth: 'none',
                                width: '100%',
                                height: '100%'
                              }}
                              loading="lazy"
                              src={img2}
                            />
                          </div>
                        </div>
                        <div
                          style={{
                            fontFamily: "'PingFang SC', sans-serif",
                            fontWeight: 400,
                            lineHeight: 0,
                            fontStyle: 'normal',
                            position: 'relative',
                            flexShrink: 0,
                            fontSize: '28px',
                            color: 'rgba(0,0,0,0.64)',
                            whiteSpace: 'nowrap',
                            textAlign: 'right'
                          }}
                        >
                          <p style={{ display: 'block', lineHeight: '40px', whiteSpace: 'pre' }}>
                            宏茂桥 Ang Mo Kio
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 底部内容 */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '80px',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      width: '100%',
                      position: 'relative',
                      flexShrink: 0,
                      boxSizing: 'border-box'
                    }}
                  >
                    {/* 汇率和手续费 */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '559px',
                        position: 'relative',
                        flexShrink: 0,
                        boxSizing: 'border-box'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px',
                          alignItems: 'flex-start',
                          justifyContent: 'flex-start',
                          width: '266px',
                          position: 'relative',
                          flexShrink: 0,
                          boxSizing: 'border-box'
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '8px',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            position: 'relative',
                            flexShrink: 0,
                            boxSizing: 'border-box'
                          }}
                        >
                          <div
                            style={{
                              fontFamily: "'PingFang SC', sans-serif",
                              fontWeight: 600,
                              lineHeight: 0,
                              fontStyle: 'normal',
                              position: 'relative',
                              flexShrink: 0,
                              fontSize: '34px',
                              color: 'rgba(0,0,0,0.88)',
                              textAlign: 'left',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            <p style={{ display: 'block', lineHeight: '48px', whiteSpace: 'pre' }}>
                              最优汇率
                            </p>
                          </div>
                          <div
                            style={{
                              position: 'relative',
                              flexShrink: 0,
                              width: '40px',
                              height: '40px'
                            }}
                          >
                            <div
                              style={{
                                position: 'absolute',
                                inset: '8.333%'
                              }}
                            >
                              <img
                                alt=""
                                style={{
                                  display: 'block',
                                  maxWidth: 'none',
                                  width: '100%',
                                  height: '100%'
                                }}
                                loading="lazy"
                                src={img3}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            fontFamily: "'WeChat Sans SS', sans-serif",
                            fontWeight: 500,
                            lineHeight: 0,
                            minWidth: '100%',
                            fontStyle: 'normal',
                            position: 'relative',
                            flexShrink: 0,
                            fontSize: '56px',
                            color: 'rgba(0,0,0,0.88)',
                            textAlign: 'left',
                            width: 'min-content'
                          }}
                        >
                          <p style={{ display: 'block', lineHeight: '64px' }}>5.3970444</p>
                        </div>
                      </div>

                      <div
                        style={{
                          backgroundColor: 'rgba(0,0,0,0.16)',
                          height: '104px',
                          flexShrink: 0,
                          width: '1px'
                        }}
                      />

                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px',
                          alignItems: 'flex-start',
                          justifyContent: 'flex-start',
                          lineHeight: 0,
                          width: '204px',
                          position: 'relative',
                          flexShrink: 0,
                          boxSizing: 'border-box'
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'PingFang SC', sans-serif",
                            fontWeight: 600,
                            minWidth: '100%',
                            fontStyle: 'normal',
                            position: 'relative',
                            flexShrink: 0,
                            fontSize: '0px',
                            color: 'rgba(0,0,0,0.88)',
                            textAlign: 'left',
                            width: 'min-content'
                          }}
                        >
                          <p style={{ lineHeight: '48px', fontSize: '34px' }}>
                            <span style={{ fontFamily: "'PingFang SC', sans-serif", fontWeight: 600 }}>
                              手续费
                            </span>
                            <span style={{ fontFamily: "'PingFang SC', sans-serif", fontWeight: 400 }}>
                              {` (新元)`}
                            </span>
                          </p>
                        </div>
                        <div
                          style={{
                            display: 'inline-grid',
                            gridTemplateColumns: 'max-content',
                            gridTemplateRows: 'max-content',
                            placeItems: 'start',
                            position: 'relative',
                            flexShrink: 0
                          }}
                        >
                          <div
                            style={{
                              gridArea: '1 / 1',
                              fontFamily: "'WeChat Sans SS', sans-serif",
                              fontWeight: 500,
                              lineHeight: 0,
                              marginLeft: 0,
                              marginTop: 0,
                              fontStyle: 'normal',
                              position: 'relative',
                              fontSize: '56px',
                              color: 'rgba(0,0,0,0.88)',
                              textAlign: 'left',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            <p style={{ display: 'block', lineHeight: '64px', whiteSpace: 'pre' }}>
                              0
                            </p>
                          </div>
                          <div
                            style={{
                              gridArea: '1 / 1',
                              fontFamily: "'WeChat Sans SS', sans-serif",
                              fontWeight: 500,
                              lineHeight: 0,
                              marginLeft: '48px',
                              marginTop: '12px',
                              fontStyle: 'normal',
                              position: 'relative',
                              fontSize: '40px',
                              color: 'rgba(0,0,0,0.4)',
                              textAlign: 'left',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            <p style={{ display: 'block', lineHeight: '48px', whiteSpace: 'pre' }}>
                              20.00
                            </p>
                          </div>
                          <div
                            style={{
                              gridArea: '1 / 1',
                              height: 0,
                              marginLeft: '48px',
                              marginTop: '37px',
                              position: 'relative',
                              width: '102px'
                            }}
                          >
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, top: '-2px' }}>
                              <img
                                alt=""
                                style={{
                                  display: 'block',
                                  maxWidth: 'none',
                                  width: '100%',
                                  height: '100%'
                                }}
                                loading="lazy"
                                src={imgLine314}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 按钮 */}
                    <div
                      style={{
                        backgroundColor: '#fbdf2f',
                        position: 'relative',
                        borderRadius: '8px',
                        flexShrink: 0,
                        width: '432px'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          height: '100%',
                          position: 'relative'
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingLeft: '64px',
                            paddingRight: '64px',
                            paddingTop: '28px',
                            paddingBottom: '28px',
                            width: '432px',
                            boxSizing: 'border-box'
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              fontFamily: "'PingFang SC', sans-serif",
                              height: '48px',
                              justifyContent: 'center',
                              lineHeight: 0,
                              fontStyle: 'normal',
                              position: 'relative',
                              flexShrink: 0,
                              fontSize: '40px',
                              color: 'rgba(0,0,0,0.88)',
                              textAlign: 'center',
                              fontWeight: 600,
                              width: '304px'
                            }}
                          >
                            <p style={{ display: 'block', lineHeight: '56px' }}>
                              填写电子汇款单
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 底部导航 */}
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                position: 'relative'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '32px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  paddingTop: 0,
                  paddingBottom: 0,
                  boxSizing: 'border-box'
                }}
              >
                <div
                  style={{
                    fontFamily: "'PingFang SC', sans-serif",
                    fontWeight: 600,
                    lineHeight: 0,
                    fontStyle: 'normal',
                    position: 'relative',
                    flexShrink: 0,
                    fontSize: '34px',
                    color: 'rgba(0,0,0,0.64)',
                    textAlign: 'center',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <p style={{ display: 'block', lineHeight: '48px', whiteSpace: 'pre' }}>
                    汇款记录
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.16)',
                    height: '32px',
                    flexShrink: 0,
                    width: '1px'
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '8px',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    position: 'relative',
                    flexShrink: 0,
                    boxSizing: 'border-box'
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'PingFang SC', sans-serif",
                      fontWeight: 600,
                      lineHeight: 0,
                      fontStyle: 'normal',
                      position: 'relative',
                      flexShrink: 0,
                      fontSize: '34px',
                      color: 'rgba(0,0,0,0.64)',
                      textAlign: 'center',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <p style={{ display: 'block', lineHeight: '48px', whiteSpace: 'pre' }}>
                      我的收款人
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.16)',
                    height: '32px',
                    flexShrink: 0,
                    width: '1px'
                  }}
                />
                <div
                  style={{
                    fontFamily: "'PingFang SC', sans-serif",
                    fontWeight: 600,
                    lineHeight: 0,
                    fontStyle: 'normal',
                    position: 'relative',
                    flexShrink: 0,
                    fontSize: '34px',
                    color: 'rgba(0,0,0,0.64)',
                    textAlign: 'center',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <p style={{ display: 'block', lineHeight: '48px', whiteSpace: 'pre' }}>
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
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          position: 'relative',
          flexShrink: 0,
          boxSizing: 'border-box'
        }}
      >
        <div
          style={{
            fontFamily: "'PingFang SC', sans-serif",
            fontWeight: 400,
            lineHeight: 0,
            fontStyle: 'normal',
            position: 'relative',
            flexShrink: 0,
            fontSize: '24px',
            color: 'rgba(0,0,0,0.4)',
            textAlign: 'center',
            width: '100%'
          }}
        >
          <p style={{ display: 'block', lineHeight: '32px' }}>本服务由Tenpay Global提供</p>
        </div>
        <div
          style={{
            height: '68px',
            width: '100%',
            position: 'relative',
            flexShrink: 0
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0
            }}
          >
            <img
              alt=""
              style={{
                display: 'block',
                maxWidth: 'none',
                width: '100%',
                height: '100%'
              }}
              loading="lazy"
              src={img4}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '23.529%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              left: '32.133%',
              right: '32.133%',
              top: '61.765%'
            }}
          >
            <div
              style={{
                flexShrink: 0,
                height: '10px',
                transform: 'scaleY(-1)',
                width: '268px'
              }}
            >
              <div
                style={{
                  backgroundColor: '#000000',
                  borderRadius: '7.5px',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffileV1; 