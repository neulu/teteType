import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
};

// responsive Width
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '1200px',
  xl: '1600px',
  '2xl': '1900px',
};

const spacing = {
  space: {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
  },
};

const theme = extendTheme(
  {
    breakpoints,
    config,
    spacing,
  },
  {
    styles: {
      global: {
        'html, body': {
          fontFamily: 'SUIT',
          fontSize: '15px',
          color: '#1B1B1B',
          fontWeight: '500',
          lineHeight: '1',
          letterSpacing: 'normal',
          transition: 'all 0.5s ease',
          '*': {
            textDecoration: 'none !important',
            boxShadow: 'none',
          },
          '.nav': {
            p: {
              sm: '0 5px 20px',
              xl: '0 12px 20px',
            },
            '>a': {
              mb: '6px',
              '>div': {
                alignItems: 'center',
                justifyContent: {
                  sm: 'center',
                  xl: 'flex-start',
                },
                h: '44px',
                fontSize: {
                  sm: '0',
                  xl: '15px',
                },
                fontWeight: '500',
                color: '#A4A1B1',
                p: '0 10px',
                borderRadius: '4px',
                cursor: 'pointer',
                '.nav-icon': {
                  display: 'inline-block',
                  w: '24px',
                  color: '#6C6B7F',
                  mr: {
                    sm: '0',
                    xl: '14px',
                  },
                },
                _hover: {
                  bg: '#2D2D2F',
                  boxShadow: '0px 2px 5px 0px #00000040',
                  '.nav-icon': {
                    color: '#A4A1B1',
                  },
                },
                '&.active': {
                  color: '#fff',
                  bg: '#6C3DF4',
                  '.nav-icon': {
                    color: '#fff',
                  },
                  _hover: {
                    bg: '#6C3DF4',
                    boxShadow: '0px 2px 5px 0px #00000040',
                    '.nav-icon': {
                      color: '#fff',
                    },
                  },
                },
              },
            },
            '&.type-drawer': {
              p: '0 12px 20px',
              '>a': {
                '>div': {
                  justifyContent: 'flex-start',
                  fontSize: '15px',
                  '.nav-icon': {
                    mr: '14px',
                  },
                },
              },
            },
          },
          '.required': {
            pos: 'relative',
            mr: '20px',
            _after: {
              content: '""',
              pos: 'absolute',
              right: '-8px',
              top: '0',
              w: '7px',
              h: '7px',
              backgroundImage: 'url(/assets/images/icons/ico-required.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 0',
            },
          },
          '.clampLine': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          },
          '.cm-scroller': {
            '&::-webkit-scrollbar': {
              width: '10px',
              height: '10px',
              backgroundColor: '#21202e',
            },
            '&::-webkit-scrollbar-corner': {
              backgroundColor: '#21202e',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#666',
              borderRadius: '8px',
              backgroundClip: 'padding-box',
              border: '2px solid transparent',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#21202e',
              borderRadius: '8px',
            },
          },
          '.pf-v5-c-log-viewer__main': {
            // backgroundColor: '#f44 !important',
            '.pf-v5-c-log-viewer__scroll-container': {
              // padding: '5px 0 0 !important',
              '&::-webkit-scrollbar': {
                width: '10px',
                height: '10px',
                backgroundColor: '#21202e',
              },
              '&::-webkit-scrollbar-corner': {
                backgroundColor: '#21202e',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#666',
                borderRadius: '8px',
                backgroundClip: 'padding-box',
                border: '2px solid transparent',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#21202e',
                borderRadius: '8px',
              },
              '.pf-v5-c-log-viewer__list': {
                '&:before': {
                  background: '#333',
                },
                '.pf-v5-c-log-viewer__list-item': {
                  lineHeight: '1.8',
                  '.pf-v5-c-log-viewer__index': {
                    color: '#999 !important',
                  },
                },
              },
            },
          },
          '.overlay': {
            position: 'fixed',
            left: '0px',
            top: '0px',
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.3)',
            zIndex: '9',
          },
          '&::-webkit-scrollbar': {
            width: '12px',
            height: '12px',
            backgroundColor: '#f4f4f7',
          },

          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ddd',
            borderRadius: '10px',
            backgroundClip: 'padding-box',
            border: '2px solid transparent',
          },

          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f4f4f7',
            borderRadius: '10px',
          },
          '.scrollbar': {
            // mr: '-15px',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              width: '12px',
              height: '12px',
              backgroundColor: '#fff',
            },

            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ddd',
              borderRadius: '10px',
              backgroundClip: 'padding-box',
              border: '2px solid transparent',
            },

            '&::-webkit-scrollbar-track': {
              backgroundColor: '#fff',
              borderRadius: '10px',
            },
            '&.typeSm': {
              '&::-webkit-scrollbar': {
                width: '4px',
                height: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#C6C6C6',
              },
            },
            '&.typeSm02': {
              '&::-webkit-scrollbar': {
                position: 'absolute',
                width: '6px',
                height: '6px',
                background: 'transparent',
              },

              '&::-webkit-scrollbar-thumb': {
                background: '#909090',
                border: '0px solid transparent',
              },

              '&::-webkit-scrollbar-track': {
                background: 'transparent',
              },
            },
            '&.typeBtn': {
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#C6C6C6',
                borderRadius: '12px',
                backgroundClip: 'padding-box',
                border: '4px solid transparent',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#ECECEC',
                borderRadius: '0',
              },
              '&::-webkit-scrollbar-button:single-button': {
                backgroundColor: '#ECECEC',
                display: 'block',
                // borderStyle: 'solid',
                height: '12px',
                width: '12px',
                cursor: 'pointer',
              },
              '&::-webkit-scrollbar-button:single-button:vertical:decrement': {
                // borderWidth: '0 6px 6px 6px',
                // borderColor: 'transparent transparent #838383 transparent',
                borderRadius: '10px 10px 0 0',
                backgroundImage: 'url(/assets/images/icons/ico-scroll-up.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center 5px',
              },
              '&::-webkit-scrollbar-button:single-button:vertical:decrement:hover': {
                // opacity: '.7'
              },
              '&::-webkit-scrollbar-button:single-button:vertical:increment': {
                borderRadius: '0 0 10px 10px',
                backgroundImage: 'url(/assets/images/icons/ico-scroll-dn.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center 1px',
              },
              '&::-webkit-scrollbar-button:vertical:single-button:increment:hover': {
                // opacity: '.7'
              },
            },
            /* Buttons 
            '&::-webkit-scrollbar-button:single-button': {
                backgroundColor: '#ECECEC',
                display: 'block',
                // borderStyle: 'solid',
                height: '12px',
                width: '12px',
                cursor: 'pointer',
            },
            '&::-webkit-scrollbar-button:single-button:vertical:decrement': {
                // borderWidth: '0 6px 6px 6px',
                // borderColor: 'transparent transparent #838383 transparent',
                borderRadius: '10px 10px 0 0',
                backgroundImage: 'url(/assets/images/icons/ico-scroll-up.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center 5px',
            },
            '&::-webkit-scrollbar-button:single-button:vertical:decrement:hover': {
                // opacity: '.7'
            },
            '&::-webkit-scrollbar-button:single-button:vertical:increment': {
                borderRadius: '0 0 10px 10px',
                backgroundImage: 'url(/assets/images/icons/ico-scroll-dn.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center 1px',
            },
            '&::-webkit-scrollbar-button:vertical:single-button:increment:hover': {
              // opacity: '.7'
            },
            */
          },
          '.chakraInputHover': {
            pos: 'relative',
            cursor: 'pointer',
            '.chakra-input': {
              minWidth: '100%',
              height: '34px',
              minHeight: '34px',
              fontSize: '15px',
              fontWeight: '500',
              color: '#1B1B1B',
              borderRadius: '4px',
              background: 'transparent',
              cursor: 'pointer',
              boxShadow: 'none',
              '&:focus-visible': {
                borderColor: '#6d6d6d',
              },
            },
            '.chakra-input__right-element': {
              transition: 'transform 0.2s ease-out',
              transformOrigin: 'center center',
            },
            // '&:hover': {
            //   '.chakra-input__right-element': {
            //     transform: 'rotate(-180deg)',
            //   },
            // },
            '&[aria-expanded=true]': {
              '.chakra-input__right-element': {
                transform: 'rotate(-180deg)',
              },
            },
          },
          '.searchArea': {
            '&:hover, &:focus-within': {
              '.chakra-input__left-addon': {
                color: '#323232',
              },
            },
          },
          '.chakra-toast__inner': {
            // maxW: 'none ',
            // minW: 'auto',
            maxWidth: '100%',
            minWidth: '100px',
            '.chakra-alert': {
              // alignItems: 'center',
              paddingTop: '8px',
              paddingBottom: '8px',
              paddingInlineStart: '15px',
              paddingInlineEnd: '15px',
            },
          },
          // resize Layout wrapper
          '.resize': {
            display: 'flex',
            overflow: 'visible !important',
            '.resize-horizon': {
              overflow: 'hidden !important',
            },
            '.resize-handle-horizon': {
              cursor: 'col-resize !important',
            },
          },
          '.loading': {
            animation: 'loading 0.8s ease-in infinite',
          },
          '@keyframes loading ': {
            '100%': {
              transform: 'rotate(360deg)',
            },
          },
        },
      },
    },
  },
  {
    components: {
      Container: {
        baseStyle: {
          w: '100%',
          maxW: '100%',
          p: '0',
        },
      },
      Heading: {
        baseStyle: {
          fontSize: '24px',
          color: '#1B1B1B',
          fontWeight: '700',
          fontFamily: 'SUIT',
          m: '0',
        },
        variants: {
          typeMd: {
            fontSize: '24px',
          },
        },
      },
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles,
                },
              },
              'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
                {
                  ...activeLabelStyles,
                },
              label: {
                top: 0,
                left: 0,
                zIndex: 6,
                position: 'absolute',
                backgroundColor: 'white',
                pointerEvents: 'none',
                mx: 3,
                px: 1,
                my: 2,
                transformOrigin: 'left top',
              },
            },
          },
          typeModal: {
            container: {
              mb: '12px',
              label: {
                display: 'flex',
                alignItems: 'center',
                // justifyContent: 'space-between',
                fontSize: '14px',
                fontWeight: '600',
                m: '0 0 8px 0',
              },
            },
          },
          typePopover: {
            container: {
              mb: '15px',
              label: {
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                fontWeight: '600',
                m: '0 0 12px 0',
                '>span': {
                  color: '#1B1B1B',
                },
              },
            },
          },
          typePopoverSm: {
            container: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: '15px',
              label: {
                display: 'flex',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1B1B1B',
                m: '0',
                '>span': {
                  color: '#1B1B1B',
                },
              },
            },
          },
          typePopoverSmHover: {
            container: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: '10px',
              p: '0', //'6px',
              label: {
                display: 'flex',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1B1B1B',
                m: '0',
                '>span': {
                  color: '#1B1B1B',
                },
              },
              // _hover: {
              //   borderRadius: '3px',
              //   bg: '#F3F3F3',
              // },
            },
          },
          typePopoverListHover: {
            container: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: '0px',
              p: '5px', //'6px',
              label: {
                display: 'flex',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1B1B1B',
                m: '0',
                '>span': {
                  color: '#1B1B1B',
                },
              },
              _hover: {
                borderRadius: '3px',
                bg: '#F3F3F3',
              },
            },
          },
          typeDrawer: {
            container: {
              mb: '20px',
              label: {
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                fontWeight: '700',
                m: '0 0 12px 0',
                '>span': {
                  color: '#1B1B1B',
                },
              },
            },
          },
          typeSm: {
            container: {
              pos: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              p: '0',
              m: '0',
              label: {
                display: 'flex',
                alignItems: 'center',
                m: '0 0 10px 0',
              },
            },
          },
          typeMd: {
            container: {
              pos: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              p: '0',
              m: '0',
              label: {
                display: 'flex',
                alignItems: 'center',
                m: '0 0 15px 0',
              },
            },
          },
        },
      },
      Button: {
        baseStyle: {
          fontFamily: 'SUIT',
          fontWeight: '500',
          lineHeight: '1',
          borderRadius: '4px',
          _disabled: {
            _hover: {
              bg: '#222 !important',
            },
          },
        },
        variants: {
          none: {
            _disabled: {
              _hover: {
                bg: 'transparent !important',
              },
            },
          },
          solid: {
            minW: '100px',
            h: '40px',
            fontFamily: 'Pretendard',
            fontSize: '15px',
            fontWeight: '400',
            color: '#fff',
            padding: '0 14px',
            bg: '#6C3DF4',
            '&:hover': {
              bg: '#5e3eb9',
            },
          },
          typeAuto: {
            pos: 'relative',
            w: 'auto',
            minW: 'auto',
            h: 'auto',
            border: 'none',
            borderRadius: '0',
            padding: '0',
            m: '0',
            bg: 'none',
          },
          typeIcon: {
            pos: 'relative',
            w: '24px',
            minW: 'auto',
            h: '24px',
            fontSize: '24px',
            border: 'none',
            borderRadius: '0',
            padding: '0',
            m: '0',
            bg: 'none',
          },
          typeIconMd: {
            w: '34px',
            minW: 'auto',
            h: '34px',
            fontSize: '19px',
            border: 'solid 1px #C6C6C6',
            padding: '0 7px',
            m: '0',
            bg: 'transparent',
          },
          typeIconHover: {
            w: '34px',
            minW: 'auto',
            h: '34px',
            color: '#6D6D6D',
            border: 'solid 1px #C6C6C6',
            padding: '0',
            m: '0',
            bg: 'transparent',
            '&:hover': {
              color: '#464646',
              bg: '#ebebeb',
            },
          },
          typeImg: {
            w: '34px',
            minW: 'auto',
            h: '34px',
            padding: '0',
            m: '0',
            bg: 'transparent',
          },
          typeImgXs: {
            w: '26px',
            minW: 'auto',
            h: '26px',
            border: 'solid 1px #DADADA',
            padding: '2px',
            m: '0',
            bg: 'transparent',
            '&:hover': {
              borderColor: '#eaeaed',
              bg: '#eaeaed',
            },
          },
          typeImgSm: {
            w: '32px',
            minW: 'auto',
            h: '32px',
            border: 'solid 1px #C6C6C6',
            padding: '0',
            m: '0',
            bg: 'transparent',
            '&:hover': {
              borderColor: '#454545',
              // bg: '#eee',
            },
          },
          typeWhiteSm: {
            minW: 'auto',
            h: '30px',
            fontSize: '13px',
            color: '#464646',
            border: 'solid 1px #C6C6C6',
            padding: '0 10px',
            background: '#fff',
            '&:hover': {
              borderColor: '#454545',
              // bg: '#eee',
            },
          },
          typeWhiteMd: {
            minW: 'auto',
            h: '34px',
            fontWeight: '600',
            fontSize: '13px',
            color: '#323232',
            border: 'solid 1px #C6C6C6',
            padding: '0 25px',
            background: '#fff',
            '&:hover': {
              borderColor: '#454545',
              // bg: '#eee',
            },
          },
          typeGrayLg: {
            w: '100%',
            minW: 'auto',
            h: '34px',
            fontWeight: '600',
            fontSize: '13px',
            color: '#323232',
            border: 'solid 1px #444',
            padding: '0 25px',
            background: '#393939',
            '&:hover': {
              borderColor: '#666',
              background: '#444',
            },
          },
          typeGrayMd: {
            minW: 'auto',
            h: '34px',
            fontWeight: '600',
            fontSize: '13px',
            color: '#fff',
            border: 'solid 1px transparent',
            padding: '0 20px',
            background: '#6C6B7F',
            '&:hover': {
              borderColor: 'transparent',
              background: '#5F5E79',
            },
          },
          typeBlackMd: {
            minW: 'auto',
            h: '34px',
            fontWeight: '600',
            fontSize: '13px',
            color: '#fff',
            border: 'solid 1px #323232',
            padding: '0 25px',
            background: '#323232',
            '&:hover': {
              bg: '#222',
            },
          },
          typeTransSm: {
            minW: 'auto',
            h: '30px',
            fontFamily: 'SUIT',
            fontSize: '13px',
            color: '#464646',
            border: 'solid 1px #C6C6C6',
            padding: '0 10px',
            background: 'transparent',
            '&:hover': {
              borderColor: '#6d6d6d',
            },
            _disabled: {
              _hover: {
                bg: 'transparent !important',
              },
            },
          },
          typeTransMd: {
            minW: 'auto',
            h: '36px',
            fontFamily: 'SUIT',
            fontSize: '14px',
            color: '#A4A1B1',
            border: 'solid 1px #6C6B7F',
            padding: '0 10px',
            background: 'transparent',
            '&:hover': {
              // borderColor: '#464646',
              bg: '#313133',
            },
            _disabled: {
              _hover: {
                bg: 'transparent !important',
              },
            },
          },
          typeTransLg: {
            minW: 'auto',
            h: '40px',
            fontFamily: 'SUIT',
            fontSize: '15px',
            fontWeight: '600',
            color: '#323232',
            border: 'solid 1px #C6C6C6',
            padding: '0 10px',
            background: 'transparent',
            '&:hover': {
              borderColor: '#6d6d6d',
            },
            _disabled: {
              _hover: {
                bg: 'transparent !important',
              },
            },
          },
          typeBlueSm: {
            minW: 'auto',
            h: '30px',
            fontSize: '13px',
            color: '#fff',
            border: 'solid 1px #6C3DF4',
            padding: '0 10px',
            background: '#6C3DF4',
            '&:hover': {
              bg: '#5e3eb9 !important',
            },
          },
          typeMore: {
            minW: 'auto',
            w: '30px',
            h: '30px',
            border: 'none',
            borderRadius: 'full',
            padding: '0',
            background: '#fff',
            '&:hover, &[aria-expanded="true"]': {
              color: '#111 !important',
              bg: '#ccc !important',
            },
          },
          typeSort: {
            display: 'flex',
            alignItems: 'center',
            w: 'full',
            minW: 'auto',
            h: '28px',
            fontFamily: 'SUIT',
            fontSize: '13px',
            textAlign: 'left',
            color: '#1B1B1B',
            lineHeight: '1.6',
            borderRadius: '4px',
            border: 'solid 1px #fff',
            padding: '0 8px',
            background: 'transparent',
            img: {
              opacity: '.5',
            },
            '&:hover, &[aria-expanded="true"]': {
              bg: '#f6f6f6',
              borderColor: '#ececec',
              img: {
                opacity: '1',
              },
            },
            // minW: 'auto',
            // h: 'auto',
            // fontFamily: 'SUIT',
            // fontSize: '13px',
            // color: '#1B1B1B',
            // borderRadius: '4px',
            // padding: '0',
            // background: 'transparent',
            // '&:hover': {
            //   bg: '#eee',
            // },
          },
          paginationBtn: {
            w: '32px',
            minW: 'auto',
            h: '32px',
            border: 'solid 1px transparent',
            borderRadius: '3px',
            padding: '0',
            '&:hover': {
              borderColor: '#C6C6C6 !important',
              bg: '#ececec !important',
            },
            _disabled: {
              '&:hover': {
                borderColor: 'transparent !important',
                bg: 'transparent !important',
              },
            },
          },
          typeSelectBtn: {
            w: 'calc(100%)',
            h: '34px',
            fontFamily: 'SUIT',
            fontSize: '14px',
            color: '#1B1B1B',
            fontWeight: '500',
            textAlign: 'left',
            border: 'solid 1px #C6C6C6',
            borderRadius: '4px',
            padding: '0 7px 0 12px',
            background: '#fff',
            _hover: {
              borderColor: '#454545',
            },
            img: {
              transition: 'transform 0.2s ease-out',
              transformOrigin: 'center center',
            },
            '&[aria-expanded=true]': {
              img: {
                transform: 'rotate(-180deg)',
              },
            },
          },
          typeCopy: {
            pos: 'absolute',
            right: '5px',
            top: '4px',
            w: '27px',
            h: '27px',
            minW: 'auto',
            p: '0',
            // borderRadius: 'full',
            zIndex: '1',
            '.copyBtn': {
              alignItems: 'center',
              justifyContent: 'center',
              width: '27px',
              height: '27px',
              borderRadius: 'full',
              svg: {
                fontSize: '20px',
              },
            },
            _hover: {
              '.copyBtn': {
                backgroundColor: '#e8e4f3',
                svg: {
                  path: {
                    fill: '#6c3df3',
                  },
                },
              },
              '& + input, & + textarea': {
                borderColor: '#909090',
              },
            },
            '.copyBtn.copy': {
              backgroundColor: '#d9d9d9',
            },
          },
          typeTree: {
            justifyContent: 'flex-start',
            minW: 'auto',
            h: '76px',
            fontWeight: '500',
            fontSize: '15px',
            color: '#1B1B1B',
            border: 'solid 1px #ECECEC',
            padding: '20px',
            background: '#fff',
            '&:hover': {
              borderColor: '#909090',
              // 'img': {
              //   boxShadow: '1px 1px 7px 2px #00000030'
              // },
            },
          },
          typeOpen: {
            minW: 'auto',
            h: '20px',
            fontWeight: '400',
            fontSize: '10px',
            color: '#fff',
            border: 'solid 1px transparent',
            padding: '0 4px 0 5px',
            marginLeft: '8px',
            background: '#6C6B7F',
            TextDecoration: 'none !important',
            svg: {
              transition: 'transform 0.2s ease-out',
              transformOrigin: 'center center',
            },
            '&:hover': {
              borderColor: 'transparent',
              background: '#6C6B7F',
            },
            '&.active': {
              borderColor: 'transparent',
              background: '#6C6B7F',
              svg: {
                transform: 'rotate(-180deg)',
              },
            },
          },
          typeRemove: {
            w: 'auto',
            minW: 'auto',
            h: '24px',
            color: '#6D6D6D',
            border: 'none',
            borderRadius: '4px',
            padding: '0 5px 0 0',
            '.chakra-text': {
              fontSize: '13px',
              fontWeight: '500',
              color: '#323232',
              textDecoration: 'underline !important',
              textUnderlineOffset: '2px',
              // textUnderlinePosition : 'under',
            },
            '&:hover': {
              bg: '#F6F6F6 !important',
            },
            _disabled: {
              opacity: '1',
              color: '#C6C6C6',
              '.chakra-text': {
                color: '#C6C6C6',
              },
              '&:hover': {
                bg: '#F6F6F6 !important',
              },
            },
          },
        },
      },
      Table: {
        baseStyle: {
          caption: {
            display: 'none',
          },
          table: {
            bg: '#fff',
          },
          th: {
            h: '44px',
            fontSize: '13px',
            color: '#1B1B1B',
            fontFamily: 'SUIT',
            lineHeight: '1',
            textAlign: 'left',
            borderBottom: 'solid 1px #e4e4e4',
            textTransform: 'none',
            fontVariantNumeric: 'normal',
            letterSpacing: 'normal',
          },
          td: {
            h: '60px',
            fontSize: '15px',
            color: '#1B1B1B',
            fontFamily: 'SUIT',
            lineHeight: '1.3',
            textAlign: 'left',
            borderBottom: 'solid 1px #ECECEC',
            wordBreak: 'break-all',
            whiteSpace: 'normal',
            textTransform: 'none',
            fontVariantNumeric: 'normal',
            letterSpacing: 'normal',
          },
        },
        variants: {
          typeListSm: {
            th: {
              fontSize: '13px',
              fontWeight: '500',
              p: '0 14px',
              borderColor: '#ECECEC',
            },
            td: {
              fontSize: '15px',
              fontWeight: '500',
              p: '10px 23px 9px',
              borderColor: '#ECECEC',
            },
            tbody: {
              tr: {
                _last: {
                  td: {
                    border: 'none',
                  },
                },
              },
            },
          },
          typeListSm02: {
            th: {
              fontSize: '13px',
              fontWeight: '500',
              p: '0 10px',
              borderColor: '#ECECEC',
              _first: {
                pl: '15px',
              },
            },
            td: {
              fontSize: '15px',
              fontWeight: '500',
              p: '15px 10px',
              borderColor: '#ECECEC',
              _first: {
                // bg: '#f44',
                pl: '15px',
              },
            },
            tbody: {
              tr: {
                _last: {
                  td: {
                    border: 'none',
                  },
                },
              },
            },
          },
          typeList: {
            th: {
              fontSize: '13px',
              fontWeight: '600',
              p: '0 15px',
              // p: '0 20px',
            },
            td: {
              fontSize: '15px',
              fontWeight: '500',
              p: '0px 15px',
            },
            tbody: {
              tr: {
                _last: {
                  td: {
                    border: 'none',
                  },
                },
                '&:hover': {
                  td: {
                    backgroundColor: '#f6f6f9',
                  },
                },
              },
            },
          },
          typeView: {
            table: {
              borderTop: 'solid 1px #ececec',
            },
            th: {
              fontSize: '15px',
              color: '#1b1b1b',
              fontWeight: '500',
              p: '10px 20px',
              borderColor: '#ececec',
              bg: '#fafafa',
            },
            td: {
              p: '10px 20px',
              borderColor: '#ececec',
            },
          },
        },
      },
      Badge: {
        variants: {
          new: {
            textTransform: 'none',
            fontSize: '13px',
            lineHeight: '1.3',
            color: '#1D7C4D',
            fontWeight: '600',
            p: '0 0 0 5px',
            m: '0',
          },
          unit: {
            textTransform: 'none',
            display: 'flex',
            alignItems: 'center',
            height: '30px',
            fontSize: '13px',
            lineHeight: '1.5',
            color: '#1B1B1B',
            fontWeight: '500',
            borderRadius: 'full',
            border: 'solid 1px #E4E4E4',
            p: '0 5px 0 12px',
            // m: '2px 8px 2px 0',
            _hover: {
              borderColor: '#999',
            },
          },
        },
      },
      Input: {
        baseStyle: {
          field: {
            // height fontSize borderRadius
            fontFamily: 'SUIT',
            fontWeight: '500',
            textAlign: 'left',
            paddingInline: '12px !important',
            border: 'solid 1px #C6C6C6',
            '&::placeholder': {
              color: '#C6C6C6', // '#B1B1B1',
              textIndent: '0',
            },
            _hover: {
              borderColor: '#444',
            },
            _disabled: {
              color: '#6D6D6D',
              borderColor: '#E4E4E4',
              bg: '#f6f6f6',
              opacity: '1',
            },
            _readOnly: {
              color: '#6D6D6D',
              borderColor: '#E4E4E4',
              bg: '#f6f6f6',
              opacity: '1',
            },
          },
        },
        variants: {
          outline: {
            field: {
              height: '34px',
              fontSize: '14px',
            },
          },
          search: {
            field: {
              width: '250px',
              height: '36px',
              fontFamily: 'Pretendard',
              fontSize: '15px',
              fontWeight: '500',
              pr: '60px',
              borderColor: '#C6C6C6',
              borderRadius: '4px !important',
              bgColor: 'transparent', // '#fff',
              _hover: {
                borderColor: '#6C3DF4',
                bgColor: '#f4f4f7',
              },
              _focus: {
                borderColor: '#323232',
                bgColor: '#f4f4f7',
              },
            },
            addon: {
              pos: 'absolute',
              right: '-4px',
              fontSize: '20px',
              color: '#6D6D6D',
              zIndex: '1',
            },
            element: {
              right: '30px',
              fontSize: '19px',
              color: '#C6C6C6',
              cursor: 'pointer',
            },
          },
          searchData: {
            field: {
              width: '100%',
              height: '74px',
              fontSize: '22px',
              p: '0',
              border: 'none',
              borderRadius: '0 !important',
              background: '#fff',
              paddingInline: '74px !important',
              _focus: {
                borderColor: '#6C3DF4',
              },
            },
            addon: {
              pos: 'absolute',
              left: '30px',
              top: '20px',
              p: '0',
              zIndex: '1',
            },
            element: {
              right: '65px',
              w: 'auto',
              h: '74px',
              fontSize: '22px',
              color: '#ccc',
              cursor: 'pointer',
            },
          },
          typeMd: {
            field: {
              height: '34px',
              fontSize: '14px',
              borderRadius: '4px',
              paddingInline: '12px 25px !important',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              wordBreak: 'break-all',
            },
          },
          typeNumber: {
            field: {
              height: '34px',
              fontSize: '14px',
              textAlign: 'right',
              borderRadius: '4px',
              _disabled: {
                color: '#B1B1B1',
                bg: '#fff',
                opacity: '1',
              },
              _readOnly: {
                color: '#B1B1B1',
                bg: '#fff',
                opacity: '1',
              },
            },
          },
          typeCopy: {
            field: {
              height: '34px',
              fontSize: '14px',
              borderRadius: '4px',
              paddingInline: '12px 25px !important',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              wordBreak: 'break-all',
              '&:hover': {
                borderColor: '#909090 !important',
              },
            },
            _disabled: {
              '&:hover': {
                borderColor: '#909090',
              },
            },
            _readOnly: {
              _hover: {
                borderColor: '#909090',
              },
            },
          },
          typeSearch: {
            field: {
              width: 'full',
              height: '34px',
              fontSize: '14px',
              paddingInline: '12px 25px !important',
              fontWeight: '500',
              pr: '60px',
              borderColor: '#C6C6C6',
              borderRadius: '4px !important',
              bgColor: '#fff',
              // _hover: {
              //   borderColor: '#6C3DF4',
              //   bgColor: '#f4f4f7',
              // },
              // _focus: {
              //   borderColor: '#323232',
              //   bgColor: '#f4f4f7',
              // },
            },
            addon: {
              pos: 'absolute',
              top: '-2px',
              right: '-4px',
              fontSize: '20px',
              color: '#6D6D6D',
              zIndex: '1',
            },
            element: {
              right: '30px',
              fontSize: '19px',
              color: '#C6C6C6',
              cursor: 'pointer',
            },
          },
        },
      },
      Tooltip: {
        baseStyle: {
          fontSize: '13px',
          fontWeight: '400',
          lineHeight: '1',
          borderRadius: '4px',
          color: '#fff',
          p: '5px 10px',
          bg: '#2d3748',
        },
        variants: {
          typeSm: {
            fontSize: '11px',
            fontWeight: '400',
            lineHeight: '1',
            borderRadius: '2px',
            color: '#fff',
            p: '5px 10px',
          },
          typeSm02: {
            pos: 'relative',
            height: '28px',
            fontSize: '13px',
            fontWeight: '500',
            lineHeight: '20px',
            borderRadius: '4px',
            color: '#fff',
            p: '4px 8px',
            _after: {
              content: '""',
              pos: 'absolute',
              left: '6px',
              top: '100%',
              width: '11px',
              height: '11px',
              marginTop: '-4px',
              backgroundImage: 'url(/assets/images/icons/icoToolArrow.svg)',
              backgroundSize: '11px 11px',
            },
          },
        },
      },
      Modal: {
        baseStyle: {
          dialog: {
            w: '500px',
            maxW: 'auto',
            boxShadow: '1px 1px 7px 2px #00000030',
          },
          overlay: {
            backgroundColor: '#00000030',
          },
          closeButton: {
            top: '25px',
            right: '30px',
            fontSize: '13.5px',
            color: '#6D6D6D',
          },
          header: {
            fontSize: '18px',
            fontWeight: '800',
            p: '30px 30px 30px',
          },
          body: {
            p: '0px 30px 0px',
            '&::-webkit-scrollbar': {
              width: '10px',
              height: '10px',
              backgroundColor: '#fff',
            },

            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ddd',
              borderRadius: '8px',
              backgroundClip: 'padding-box',
              border: '2px solid transparent',
            },

            '&::-webkit-scrollbar-track': {
              backgroundColor: '#fff',
              borderRadius: '8px',
            },
          },
          footer: {
            p: '20px 30px 30px',
          },
        },
        variants: {
          typeAlert: {
            dialog: {
              w: '370px',
              maxW: 'auto',
              borderRadius: '4px',
              bg: '#fff',
            },
            header: {
              fontSize: '16px',
              fontWeight: '700',
              p: '20px 20px 0px',
            },
            body: {
              minH: '50px',
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '1.6',
              color: '#1b1b1b',
              p: '20px 20px 10px',
            },
            footer: {
              p: '20px',
            },
          },
          typeMd: {
            dialog: {
              w: '500px',
              maxW: '500px',
              minW: '500px',
            },
            closeButton: {
              top: '25px',
              right: '25px',
              fontSize: '13px',
            },
            header: {
              display: 'flex',
              fontSize: '18px',
              fontWeight: '800',
              color: '#1B1B1B',
              p: '30px 30px 30px',
            },
            body: {
              p: '0px 30px 20px',
              m: '0px',
              // '&::-webkit-scrollbar': {
              //   width: '10px',
              //   height: '10px',
              //   borderRadius: '10px',
              //   backgroundColor: '#f9f9f9',
              // },

              // '&::-webkit-scrollbar-thumb': {
              //   backgroundColor: '#898989',
              //   borderRadius: '8px',
              //   backgroundClip: 'padding-box',
              //   border: '2px solid transparent',
              // },

              // '&::-webkit-scrollbar-track': {
              //   backgroundColor: '#f9f9f9',
              //   width: '10px',
              //   borderRadius: '10px',
              // },
            },
            footer: {
              p: '10px 30px 30px',
            },
          },
          typeLg: {
            dialog: {
              w: '600px',
              maxW: '600px',
              minW: '600px',
            },
            closeButton: {
              top: '25px',
              right: '25px',
              fontSize: '13px',
            },
            header: {
              display: 'flex',
              fontSize: '18px',
              fontWeight: '800',
              color: '#1B1B1B',
              p: '30px 30px 30px',
            },
            body: {
              p: '0px 30px 20px',
              m: '0px',
              // '&::-webkit-scrollbar': {
              //   width: '10px',
              //   height: '10px',
              //   borderRadius: '10px',
              //   backgroundColor: '#f9f9f9',
              // },

              // '&::-webkit-scrollbar-thumb': {
              //   backgroundColor: '#898989',
              //   borderRadius: '8px',
              //   backgroundClip: 'padding-box',
              //   border: '2px solid transparent',
              // },

              // '&::-webkit-scrollbar-track': {
              //   backgroundColor: '#f9f9f9',
              //   width: '10px',
              //   borderRadius: '10px',
              // },
            },
            footer: {
              p: '10px 30px 30px',
            },
          },
          typeAdd: {
            dialog: {
              w: '500px',
              maxW: '500px',
              minW: '500px',
            },
            closeButton: {
              top: '25px',
              right: '25px',
              fontSize: '13px',
            },
            header: {
              display: 'flex',
              fontSize: '18px',
              fontWeight: '800',
              color: '#1B1B1B',
              p: '30px 30px 20px',
            },
            body: {
              p: '0px 30px 30px',
              m: '0px',
              // '&::-webkit-scrollbar': {
              //   width: '10px',
              //   height: '10px',
              //   borderRadius: '10px',
              //   backgroundColor: '#f9f9f9',
              // },

              // '&::-webkit-scrollbar-thumb': {
              //   backgroundColor: '#898989',
              //   borderRadius: '8px',
              //   backgroundClip: 'padding-box',
              //   border: '2px solid transparent',
              // },

              // '&::-webkit-scrollbar-track': {
              //   backgroundColor: '#f9f9f9',
              //   width: '10px',
              //   borderRadius: '10px',
              // },
            },
            footer: {
              p: '10px 30px 30px',
            },
          },
          typeCreate: {
            dialog: {
              w: '500px',
              h: '780px',
              maxW: '500px',
              minW: '500px',
            },
            closeButton: {
              top: '25px',
              right: '25px',
              fontSize: '13px',
            },
            header: {
              display: 'flex',
              fontSize: '18px',
              fontWeight: '800',
              color: '#1B1B1B',
              p: '30px 30px 20px 22px',
            },
            body: {
              // p: '0px 30px 0px',
              // m: '0px',
              p: '0px 10px 20px 30px',
              mr: '11px',
              mt: '5px',
              mb: '5px',
              maxHeight: 'calc(600px)',
              // minHeight: 'calc(100vh - 280px)',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '7px',
                height: '7px',
                backgroundColor: '#fff',
              },

              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#909090',
                borderRadius: '8px',
                backgroundClip: 'padding-box',
                border: '0px solid transparent',
              },

              '&::-webkit-scrollbar-track': {
                backgroundColor: '#fff',
                borderRadius: '8px',
              },
              '&.visible': {
                overflow: 'visible',
              },
            },
            footer: {
              p: '20px 30px 30px',
              borderTop: 'solid 1px #ECECEC',
            },
          },
          typeCreate02: {
            dialog: {
              w: '500px',
              h: '780px',
              maxW: '500px',
              minW: '500px',
            },
            closeButton: {
              top: '25px',
              right: '25px',
              fontSize: '13px',
            },
            header: {
              display: 'flex',
              fontSize: '18px',
              fontWeight: '800',
              color: '#1B1B1B',
              p: '30px 30px 20px',
            },
            body: {
              p: '0px 30px 0px',
              m: '0px',
            },
            footer: {
              p: '30px',
            },
          },
          typeEdit: {
            dialog: {
              w: '500px',
              h: '780px',
              maxW: '500px',
              minW: '500px',
            },
            header: {
              display: 'flex',
              flexDirection: 'column',
              fontSize: '18px',
              fontWeight: '800',
              color: '#1B1B1B',
              p: '12px 0px 20px',
            },
            body: {
              // p: '0px 30px 0px',
              p: '0px 10px 20px 30px',
              mr: '11px',
              mt: '5px',
              mb: '5px',
              maxHeight: 'calc(600px)',
              // minHeight: 'calc(100vh - 280px)',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '7px',
                height: '7px',
                backgroundColor: '#fff',
              },

              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#909090',
                borderRadius: '8px',
                backgroundClip: 'padding-box',
                border: '0px solid transparent',
              },

              '&::-webkit-scrollbar-track': {
                backgroundColor: '#fff',
                borderRadius: '8px',
              },
              '&.visible': {
                overflow: 'visible',
              },
            },
            footer: {
              p: '20px 30px 30px',
              borderTop: 'solid 1px #ECECEC',
            },
          },
          typeProperty: {
            dialog: {
              w: '380px',
              maxW: '380px',
              minW: '380px',
            },
            closeButton: {
              top: '25px',
              right: '25px',
              fontSize: '13px',
            },
            header: {
              display: 'flex',
              fontSize: '18px',
              fontWeight: '800',
              color: '#1B1B1B',
              p: '30px 20px 20px',
            },
            body: {
              // border: 'solid 1px #E4E4E4',
              // borderRadius: '4px',
              // m: '0px 20px 30px',
              p: '0 20px 30px',
              overflow: 'overlay',
              '&::-webkit-scrollbar': {
                width: '6px',
                height: '6px',
                backgroundColor: 'transparent',
              },

              '&::-webkit-scrollbar-thumb': {
                position: 'relative',
                background: '#0000',
                // backgroundColor: '#909090',
                border: '0px solid transparent',
                _before: {
                  content: '""',
                  display: 'block',
                  position: 'absolute',

                  width: '3px',
                  height: '3px',
                  background: '#f44',
                },
              },

              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
              },
            },
            footer: {
              p: '20px 20px 30px',
              // borderTop: 'solid 1px #ECECEC',
            },
          },
        },
      },
      Menu: {
        variants: {
          typeAccount: {
            list: {
              w: '120px',
              minW: 'auto',
              p: '5px 0',
              m: '-5px 0 0 -5px',
              borderRadius: '4px',
              bg: '#fff',
            },
            item: {
              h: '36px',
              fontSize: '14px',
              p: '0px 20px',
              mb: '10px',
              color: '#323232',
              _hover: {
                bg: '#efefef',
              },
              _focus: {
                bg: '#efefef',
              },
              _last: {
                mb: '0',
              },
            },
          },
          typeSorting: {
            list: {
              w: '180px',
              minW: 'auto',
              p: '10px',
              m: '-5px 0 0 ',
              border: 'none',
              borderRadius: '4px',
              bg: '#fff',
              boxShadow: '1px 1px 5px 1px #00000020',
            },
            item: {
              h: '31px',
              fontFamily: 'SUIT',
              fontSize: '14px',
              fontWeight: '500',
              p: '0px 5px',
              borderRadius: '4px',
              mb: '10px',
              color: '#323232',
              _hover: {
                bg: '#f6f6f6',
              },
              _focus: {
                bg: '#f6f6f6',
              },
              _last: {
                mb: '0',
              },
            },
          },
          typeSelect: {
            list: {
              minWidth: 'auto',
              fontFamily: 'SUIT',
              fontSize: '14px',
              fontWeight: '500',
              color: '#1b1b1b',
              p: '10px',
              marginTop: '-6px',
              marginBottom: '-6px',
              border: 'solid 1px #C6C6C6',
              borderRadius: '4px',
              bg: '#fff',
              maxHeight: '200px',
              overflow: 'auto',
              // '&::-webkit-scrollbar': {
              //   width: '10px',
              //   height: '10px',
              //   backgroundColor: '#fff',
              // },
              // '&::-webkit-scrollbar-thumb': {
              //   backgroundColor: '#ddd',
              //   borderRadius: '8px',
              //   backgroundClip: 'padding-box',
              //   border: '2px solid transparent',
              // },
              // '&::-webkit-scrollbar-track': {
              //   backgroundColor: '#fff',
              //   borderRadius: '8px',
              // },
              '&::-webkit-scrollbar': {
                width: '8px',
                height: '8px',
                backgroundColor: 'transparent',
              },

              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#909090',
                borderRadius: '8px',
                backgroundClip: 'padding-box',
                border: '1px solid transparent',
              },

              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
                borderRadius: '8px',
              },
              button: {
                pos: 'relative',
                fontFamily: 'SUIT',
                fontSize: '15px',
                fontWeight: '500',
                color: '#323232',
                pl: '10px',
                pr: '10px',
                '.chakra-menu__icon-wrapper': {
                  pos: 'absolute',
                  right: '5px',
                  fontSize: '10px',
                  svg: {
                    color: '#6C3DF4',
                  },
                },
              },
            },
            item: {
              // padding: '10px 25px 10px 15px',
              // color: '#1a1a1a',
              height: '34px',
              padding: '5px 10px',
              margin: '0px 0px 10px',
              // color: '#323232',
              // fontSize: '15px',
              // fontWeight: '500',
              // lineHeight: '1.5',
              borderRadius: '4px',
              _hover: {
                bg: '#f6f6f6',
                _active: {
                  bg: '#ECECEC',
                },
              },
              _last: {
                margin: '0',
              },
              _focus: {
                bg: 'transparent',
              },
            },
          },
          typeSelect02: {
            button: {
              pos: 'relative',
              w: 'calc(100%)',
              h: '34px',
              fontFamily: 'SUIT',
              fontSize: '14px',
              color: '#1B1B1B',
              fontWeight: '500',
              textAlign: 'left',
              border: 'solid 1px #C6C6C6',
              borderRadius: '4px',
              padding: '0 7px 0 12px',
              backgroundColor: '#fff',
              _hover: {
                borderColor: '#454545',
              },
              _after: {
                content: '""',
                pos: 'absolute',
                right: '7px',
                top: '50%',
                width: '20px',
                height: '20px',
                marginTop: '-10px',
                backgroundImage: 'url(/assets/images/icons/ico-select.svg)',
                backgroundSize: '20px 20px',
                transition: 'transform 0.2s ease-out',
              },
              '&[aria-expanded=true]': {
                _after: {
                  transform: 'rotate(-180deg)',
                },
                '& + div .chakra-menu__menu-list': {
                  display: 'block',
                },
              },
            },
            list: {
              display: 'none',
              minWidth: 'auto',
              fontFamily: 'SUIT',
              fontSize: '14px',
              fontWeight: '500',
              color: '#1b1b1b',
              p: '0',
              marginTop: '-6px',
              marginBottom: '-6px',
              border: 'solid 1px #C6C6C6',
              borderRadius: '4px',
              bg: '#fff',
              maxHeight: '200px',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '10px',
                height: '10px',
                backgroundColor: '#fff',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ddd',
                borderRadius: '8px',
                backgroundClip: 'padding-box',
                border: '2px solid transparent',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#fff',
                borderRadius: '8px',
              },
              button: {
                pos: 'relative',
                fontFamily: 'SUIT',
                fontSize: '14px',
                fontWeight: '500',
                color: '#1b1b1b',
                pl: '12px',
                pr: '12px',
                '.chakra-menu__icon-wrapper': {
                  pos: 'absolute',
                  right: '5px',
                  fontSize: '10px',
                  svg: {
                    color: '#6C3DF4',
                  },
                },
              },
            },
            item: {
              padding: '10px 25px 10px 15px',
              color: '#1a1a1a',
              _hover: {
                bg: '#efefef',
              },
              _focus: {
                bg: '#efefef',
              },
            },
          },
          typeMore: {
            list: {
              w: '100px',
              minW: 'auto',
              p: '0px 0',
              m: '-5px 0 0 -5px',
              borderRadius: '4px',
              bg: '#fff',
              overflow: 'hidden',
            },
            item: {
              // h: '30px',
              fontSize: '14px',
              fontWeight: '500',
              p: '10px 15px 10px 10px',
              mb: '0px',
              color: '#323232',
              _hover: {
                color: '#323232',
                bg: '#ECECEC',
              },
              _focus: {
                color: '#323232',
                bg: 'transparent',
              },
            },
          },

          typeModal: {
            list: {
              w: '430px',
              p: '0',
              fontSize: '14px',
              fontWeight: '300',
              marginTop: '-7px',
              borderRadius: '3px',
              border: 'solid 1px #dedede',
              bg: '#fff',
              maxHeight: '150px',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '10px',
                height: '10px',
                backgroundColor: '#fff',
              },

              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ddd',
                borderRadius: '8px',
                backgroundClip: 'padding-box',
                border: '2px solid transparent',
              },

              '&::-webkit-scrollbar-track': {
                backgroundColor: '#fff',
                borderRadius: '8px',
              },
            },
            item: {
              padding: '10px 25px 10px 15px',
              color: '#1a1a1a',
              _hover: {
                bg: '#efefef',
              },
              _focus: {
                bg: '#efefef',
              },
            },
          },
        },
      },
      Popover: {
        baseStyle: {
          content: {
            maxWidth: '500px',
            width: '500px',
            p: '0',
          },
          closeButton: {
            top: '25px',
            right: '30px',
            fontSize: '13.5px',
            color: '#6D6D6D',
          },
          header: {
            fontSize: '18px',
            fontWeight: '700',
            p: '30px 30px 30px',
            border: 'none',
          },
          body: {
            p: '0px 30px 0px',
          },
          footer: {
            textAlign: 'right',
            p: '20px 30px 30px',
            border: 'none',
          },
        },
        variants: {
          typeScroll: {
            body: {
              p: '0px 10px 20px 30px',
              mr: '11px',
              mt: '5px',
              mb: '5px',
              maxHeight: 'calc(600px)',
              // minHeight: 'calc(100vh - 280px)',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '7px',
                height: '7px',
                backgroundColor: '#fff',
              },

              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#909090',
                borderRadius: '8px',
                backgroundClip: 'padding-box',
                border: '0px solid transparent',
              },

              '&::-webkit-scrollbar-track': {
                backgroundColor: '#fff',
                borderRadius: '8px',
              },
              '&.visible': {
                overflow: 'visible',
              },
            },
          },
          typeSelect: {
            popper: {
              borderRadius: '4px',
              border: 'solid 1px #dadada',
              inset: '-7px auto auto 0px !important',
            },
            content: {
              maxWidth: '438px',
              width: '438px',
              lineHeight: '1.3',
              borderRadius: '4px',
              border: 'none !important',
              p: '0px',
              mt: '0', // '-5px',
              boxShadow: '0 6px 6px 0 #00000020 !important',
            },
            body: {
              width: 'max-content',
              minWidth: '100%',
              padding: '0',
              maxHeight: '200px',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '8px',
                height: '8px',
                backgroundColor: 'transparent',
              },

              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ddd',
                borderRadius: '8px',
                backgroundClip: 'padding-box',
                border: '1px solid transparent',
              },

              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
                borderRadius: '8px',
              },
              // '&::-webkit-scrollbar': {
              //   width: '10px',
              //   background: '#fff',
              // },
              // '&::-webkit-scrollbar-track': {
              //     background: '#ECECEC',
              //     borderRadius: '0px',
              // },
              // '&::-webkit-scrollbar-thumb': {
              //     background: '#C6C6C6',
              //     borderRadius: '6px',
              //     backgroundClip: 'padding-box',
              //     border: '3px solid transparent',
              // },
            },
          },
          typeNewAdd: {
            content: {
              w: '500px',
              maxW: '500px',
              minW: '500px',
              height: '780px',
              boxShadow: '1px 1px 7px 2px #00000030',
            },
            closeButton: {
              width: '42px',
              height: '42px',
              top: '25px',
              right: '15px',
              fontSize: '13px',
              _hover: {
                bgColor: '#f5f5f5',
              },
            },
            header: {
              display: 'flex',
              fontSize: '18px',
              fontWeight: '800',
              color: '#1B1B1B',
              lineHeight: '1.5',
              p: '30px 20px 20px',
            },
            body: {
              // p: '0px 20px 30px',
              // m: '0px',
              // maxHeight: 'calc(100vh - 170px)',
              // overflowX: 'hidden',
              // overflowY: 'auto',
              // '&::-webkit-scrollbar': {
              //   width: '10px',
              //   height: '10px',
              //   backgroundColor: '#fff',
              // },

              // '&::-webkit-scrollbar-thumb': {
              //   backgroundColor: '#ddd',
              //   borderRadius: '8px',
              //   backgroundClip: 'padding-box',
              //   border: '2px solid transparent',
              // },

              // '&::-webkit-scrollbar-track': {
              //   backgroundColor: '#fff',
              //   borderRadius: '8px',
              // },
              p: '0px 0px 30px 20px',
              mr: '10px',
              mt: '0',
              mb: '5px',
              // maxHeight: 'calc(600px)',
              // minHeight: 'calc(100vh - 280px)',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '7px',
                height: '7px',
                backgroundColor: '#fff',
              },

              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#909090',
                borderRadius: '8px',
                backgroundClip: 'padding-box',
                border: '0px solid transparent',
              },

              '&::-webkit-scrollbar-track': {
                backgroundColor: '#fff',
                borderRadius: '8px',
              },
            },
          },
        },
      },
      Text: {
        baseStyle: {
          m: '0',
          p: '0',
          lineHeight: '1.5',
        },
        variants: {
          typeNav: {
            height: '30px',
            fontSize: '13px',
            fontWeight: '500',
            fontFamily: 'Pretendard',
            lineHeight: '30px',
            color: '#6C6B7F',
            textAlign: {
              sm: 'center',
              xl: 'left',
            },
            m: {
              sm: '0',
              xl: '14px 0 6px 10px',
            },
          },
          typeNavDrawer: {
            height: '30px',
            fontSize: '13px',
            fontWeight: '500',
            fontFamily: 'Pretendard',
            lineHeight: '30px',
            color: '#6C6B7F',
            textAlign: 'left',
            m: '14px 0 6px 10px',
          },
          typeSm: {
            fontSize: '13px',
            fontWeight: '500',
            color: '#6D6D6D',
          },
          typeSm02: {
            fontSize: '14px',
            fontWeight: '700',
            color: '#1b1b1b',
          },
          typeMd: {
            fontFamily: 'SUIT',
            fontSize: '15px',
            fontWeight: '600',
            color: '#1b1b1b',
          },
          typeMd02: {
            fontFamily: 'SUIT',
            fontSize: '15px',
            fontWeight: '500',
            color: '#1b1b1b',
          },
          typeLg: {
            fontFamily: 'SUIT',
            fontSize: '16px',
            fontWeight: '700',
            color: '#1b1b1b',
          },
          typeLg02: {
            fontFamily: 'SUIT',
            fontSize: '18px',
            fontWeight: '700',
            color: '#1b1b1b',
          },
          typeXl: {
            fontFamily: 'SUIT',
            fontSize: '24px',
            fontWeight: '700',
            color: '#1b1b1b',
          },
          typeDesc: {
            fontFamily: 'SUIT',
            fontSize: '14px',
            fontWeight: '500',
            color: '#1B1B1B',
            lineHeight: '1.4',
          },
          typeMessage: {
            fontFamily: 'SUIT',
            fontSize: '12px',
            fontWeight: '500',
          },
          typeDt: {
            fontFamily: 'SUIT',
            fontSize: '14px',
            fontWeight: '700',
            color: '#1b1b1b',
            lineHeight: '1.5',
          },
          typeDd: {
            fontFamily: 'SUIT',
            fontSize: '14px',
            fontWeight: '500',
            color: '#6D6D6D',
            lineHeight: '1.5',
          },
          typeBox: {
            h: '25px',
            fontFamily: 'SUIT',
            fontSize: '14px',
            fontWeight: '500',
            color: '#1B1B1B',
            lineHeight: '25px',
            borderRadius: '4px',
            p: '0 10px',
            bg: '#EDEDED',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            wordBreak: 'break-all',
          },
          typeLine: {
            fontSize: '13px',
            fontWeight: '500',
            color: '#323232',
            textDecoration: 'underline !important',
            textUnderlineOffset: '1px',
            textUnderlinePosition: 'under',
          },
          type400: {
            fontFamily: 'SUIT',
            fontSize: '16px',
            fontWeight: '500',
            color: '#1b1b1b',
          },
          typeRegular: {
            fontFamily: 'SUIT',
            fontSize: '16px',
            fontWeight: '400',
            color: '#1b1b1b',
          },
          typeMedium: {
            fontFamily: 'SUIT',
            fontSize: '16px',
            fontWeight: '500',
            color: '#1b1b1b',
          },

          typeSemiBold: {
            fontFamily: 'SUIT',
            fontSize: '16px',
            fontWeight: '600',
            color: '#1b1b1b',
          },
          typeBold: {
            fontFamily: 'SUIT',
            fontSize: '16px',
            fontWeight: '700',
            color: '#1b1b1b',
          },
          typeExtraBold: {
            fontFamily: 'SUIT',
            fontSize: '16px',
            fontWeight: '800',
            color: '#1b1b1b',
          },
        },
      },
      Textarea: {
        variants: {
          typeSm: {
            height: '60px',
            minHeight: '60px',
            fontSize: '14px',
            fontFamily: 'SUIT',
            fontWeight: '500',
            textAlign: 'left',
            lineHeight: '1.5',
            paddingInline: '12px !important',
            border: 'solid 1px #C6C6C6',
            borderRadius: '4px',
            resize: 'none',
            _hover: {
              borderColor: '#444',
            },
            '&::placeholder': {
              color: '#B1B1B1',
              textIndent: '0',
            },
            '&::-webkit-scrollbar': {
              width: '10px',
              height: '10px',
              backgroundColor: '#fff',
            },

            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ddd',
              borderRadius: '8px',
              backgroundClip: 'padding-box',
              border: '2px solid transparent',
            },

            '&::-webkit-scrollbar-track': {
              backgroundColor: '#fff',
              borderRadius: '8px',
            },
            _disabled: {
              color: '#6D6D6D',
              borderColor: '#E4E4E4',
              bg: '#f6f6f6',
              opacity: '1',
              '&::-webkit-scrollbar': {
                backgroundColor: '#F9F9F9',
              },

              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
              },

              '&::-webkit-scrollbar-track': {
                backgroundColor: '#F9F9F9',
              },
            },
            _readOnly: {
              color: '#6D6D6D',
              borderColor: '#E4E4E4',
              bg: '#f6f6f6',
              opacity: '1',
              '&::-webkit-scrollbar': {
                backgroundColor: '#F9F9F9',
              },

              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
              },

              '&::-webkit-scrollbar-track': {
                backgroundColor: '#F9F9F9',
              },
            },
          },
          typeMd: {
            // height fontSize borderRadius
            height: '150px',
            fontSize: '14px',
            fontFamily: 'SUIT',
            fontWeight: '500',
            textAlign: 'left',
            borderRadius: '4px',
            paddingInline: '12px 25px !important',
            border: 'solid 1px #C6C6C6',
            resize: 'none',
            _hover: {
              borderColor: '#444',
            },
            '&::placeholder': {
              color: '#B1B1B1',
              textIndent: '0',
            },
            // '&:focus': {
            //   borderColor: '#3725FF',
            // },
            '&::-webkit-scrollbar': {
              width: '10px',
              height: '10px',
              backgroundColor: '#fff',
            },

            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ddd',
              borderRadius: '8px',
              backgroundClip: 'padding-box',
              border: '2px solid transparent',
            },

            '&::-webkit-scrollbar-track': {
              backgroundColor: '#fff',
              borderRadius: '8px',
            },
            _disabled: {
              color: '#6D6D6D',
              bg: '#f6f6f6',
              opacity: '1',
              '&::-webkit-scrollbar': {
                backgroundColor: '#f6f6f6',
              },

              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
              },

              '&::-webkit-scrollbar-track': {
                backgroundColor: '#f6f6f6',
              },
            },
            _readOnly: {
              color: '#6D6D6D',
              bg: '#f6f6f6',
              opacity: '1',
              '&::-webkit-scrollbar': {
                backgroundColor: '#f6f6f6',
              },

              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
              },

              '&::-webkit-scrollbar-track': {
                backgroundColor: '#f6f6f6',
              },
            },
          },
          typeXs: {
            height: '34px',
            minHeight: '34px',
            fontSize: '14px',
            fontFamily: 'SUIT',
            fontWeight: '500',
            textAlign: 'left',
            lineHeight: '1.5',
            padding: '6px 0 0',
            paddingInline: '12px !important',
            border: 'solid 1px #C6C6C6',
            borderRadius: '4px',
            resize: 'none',
            _hover: {
              borderColor: '#444',
            },
            '&::placeholder': {
              color: '#B1B1B1',
              textIndent: '0',
            },
            '&::-webkit-scrollbar': {
              width: '10px',
              height: '10px',
              backgroundColor: '#fff',
            },

            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ddd',
              borderRadius: '8px',
              backgroundClip: 'padding-box',
              border: '2px solid transparent',
            },

            '&::-webkit-scrollbar-track': {
              backgroundColor: '#fff',
              borderRadius: '8px',
            },
            _disabled: {
              color: '#6D6D6D',
              borderColor: '#E4E4E4',
              bg: '#f6f6f6',
              opacity: '1',
              '&::-webkit-scrollbar': {
                backgroundColor: '#F9F9F9',
              },

              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
              },

              '&::-webkit-scrollbar-track': {
                backgroundColor: '#F9F9F9',
              },
            },
            _readOnly: {
              color: '#6D6D6D',
              borderColor: '#E4E4E4',
              bg: '#f6f6f6',
              opacity: '1',
              '&::-webkit-scrollbar': {
                backgroundColor: '#F9F9F9',
              },

              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
              },

              '&::-webkit-scrollbar-track': {
                backgroundColor: '#F9F9F9',
              },
            },
          },
        },
      },
      Drawer: {
        // transform: translateX(0%) translateY(2px) translateZ(0px);
        baseStyle: {
          overlay: {
            bg: 'blackAlpha.400',
          },
          header: {
            flex: 'inherit',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            h: '58px',
            p: '0 10px',
            borderBottom: 'solid 1px #e5e5e5',
            button: {
              boxShadow: 'none !important',
            },
          },
          body: {
            p: '30px 20px 50px 30px',
            maxHeight: 'calc(100vh - 58px)',
            overflow: 'auto',
            '&::-webkit-scrollbar': {
              width: '10px',
              height: '10px',
              backgroundColor: '#fff',
            },

            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ddd',
              borderRadius: '8px',
              backgroundClip: 'padding-box',
              border: '2px solid transparent',
            },

            '&::-webkit-scrollbar-track': {
              backgroundColor: '#fff',
              borderRadius: '8px',
            },
          },
        },
        variants: {
          sidebar: {
            dialogContainer: {
              w: '1px',
              h: '1px',
            },
          },
        },
      },
      Tabs: {
        baseStyle: {
          tablist: {
            p: '5px',
            mb: '20px',
            borderRadius: '4px',
            // bg: '#f0ecfb',
            border: 'solid 1px #6A45D520',
            bg: '#6A45D510',
          },
          tab: {
            h: '32px',
            fontSize: '13px',
            color: '#1B1B1B',
            fontWeight: '500',
            p: '12px 0',
            _selected: {
              color: '#1B1B1B',
              borderRadius: '4px',
              bg: '#fff',
            },
          },
          tabpanels: {},
          tabpanel: {
            p: '0',
          },
        },
        variants: {
          unstyled: {
            tab: {
              fontSize: '13px',
              color: '#1B1B1B',
              fontWeight: '500',
            },
          },
        },
      },
      Link: {
        variants: {
          typeLink: {
            color: '#1b1b1b',
            lineHeight: '1.4',
            textDecoration: 'underline !important',
            textUnderlineOffset: '1px',
            textUnderlinePosition: 'under',
            _hover: {
              color: '#6c3df4',
            },
          },
          typeLink02: {
            color: '#1b1b1b',
            lineHeight: '1.4',
            borderRadius: '4px',
            // textDecoration: 'underline !important',
            // textUnderlineOffset : '1px',
            // textUnderlinePosition : 'under',
            _hover: {
              color: '#6c3df4',
              bg: '#ECECEC',
            },
          },
          typeLink03: {
            pos: 'relative',
            color: '#1b1b1b',
            lineHeight: '1.4',
            borderRadius: '0',
            borderTop: 'solid 1px #E4E4E4',
            p: '12px 10px',
            // _hover: {
            //   color: '#6c3df4',
            //   bg: '#ECECEC',
            // },
            _first: {
              border: 'none',
            },
          },
          typeLine: {
            color: '#1b1b1b',
            lineHeight: '1.4',
            textDecoration: 'underline !important',
            textUnderlineOffset: '1px',
            textUnderlinePosition: 'under',
            _hover: {
              color: '#6c3df4',
            },
          },
          typeUrl: {
            color: '#6C3DF4',
            lineHeight: '1.5',
            textDecoration: 'underline !important',
            textUnderlineOffset: '1px',
            textUnderlinePosition: 'under',
            _hover: {
              color: '#5e3eb9',
            },
          },
          typeList: {
            display: 'block',
            fontSize: '14px',
            color: '#1b1b1b',
            lineHeight: '1.5',
            p: '2px 15px',
            m: '2px 0',
            _hover: {
              bg: '#f0f0f0',
            },
          },
          typeList02: {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            fontSize: '14px',
            color: '#1b1b1b',
            lineHeight: '1.5',
            p: '2px',
            m: '7px 0',
            // _hover: {
            //   bg: '#f0f0f0',
            // },
            _first: {
              marginTop: '0',
            },
            _last: {
              marginBottom: '0',
            },
          },
        },
      },
      List: {
        baseStyle: {
          container: {
            w: 'full',
          },
          item: {
            display: 'flex',
            alignItems: 'center',
            padding: '0',
            margin: '18px 0',
            _first: {
              marginTop: '0',
            },
            _last: {
              marginBottom: '0',
            },
          },
          icon: {},
        },
        variants: {
          typeLink: {
            container: {
              fontSize: '18px',
              fontWeight: '600',
              color: '#1B1B1B',
            },
            item: {
              display: 'flex',
              alignItems: 'center',
              h: '70px',
              padding: '0',
              margin: '15px 0',
              // borderRadius: '6px',
              backgroundColor: '#fff',
              backgroundImage: 'url(/assets/images/icons/ico-arrow-03.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right center',
              // cursor: ' pointer',
              // '&:hover': {
              //   backgroundColor: '#EFEFEF',
              // },
              // '&.active': {
              //   backgroundColor: '#EFEFEF',
              // },
            },
          },
          typeHover: {
            container: {
              fontSize: '16px',
              fontWeight: '600',
              color: '#1B1B1B',
            },
            item: {
              display: 'flex',
              alignItems: 'center',
              padding: '5px',
              margin: '0 0 5px',
              borderRadius: '10px',
              backgroundColor: '#fff',
              backgroundImage: 'url(/assets/images/icons/ico-arrow-03.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'calc(100% - 5px) center',
              cursor: ' pointer',
              '&:hover': {
                backgroundColor: '#f6f6f6',
              },
              '&.active': {
                backgroundColor: '#f6f6f6',
              },
              _last: {
                margin: '0',
              },
            },
          },
          typeList: {
            container: {
              fontSize: '16px',
              fontWeight: '600',
              color: '#1B1B1B',
            },
            item: {
              display: 'flex',
              alignItems: 'center',
              padding: '5px',
              margin: '0 0 5px',
              borderRadius: '10px',
              backgroundColor: '#fff',
              // backgroundImage: 'url(/assets/images/icons/ico-arrow-03.svg)',
              // backgroundRepeat: 'no-repeat',
              // backgroundPosition: 'calc(100% - 5px) center',
              // cursor: ' pointer',
              // '&:hover': {
              //   backgroundColor: '#f6f6f6',
              // },
              // '&.active': {
              //   backgroundColor: '#f6f6f6',
              // },
              _last: {
                margin: '0',
              },
            },
          },
          typeChk: {
            container: {
              fontFamily: 'SUIT',
              fontSize: '14px',
              fontWeight: '500',
              color: '#1b1b1b',
              whiteSpace: 'nowrap',
            },
            item: {
              padding: '0',
              margin: '0px',
              cursor: 'pointer',
              backgroundColor: '#fff',
              _hover: {
                backgroundColor: '#efefef',
              },
              _before: {
                content: 'none',
              },
            },
          },
        },
      },
      Accordion: {
        baseStyle: {
          root: {},
          container: {
            border: 'none',
          },
          button: {
            pos: 'relative',
            alignItems: 'center',
            height: '40px',
            borderRadius: '4px',
            p: '0',
            m: '0',
            bg: 'transparent',
            _hover: {
              bg: 'transparent',
            },
          },
          panel: {
            p: '0',
          },
          icon: {
            pos: 'relative',
            w: '30px',
            h: '30px',
            bg: 'transparent',
          },
        },
        variants: {
          typeLast: {
            container: {
              paddingBottom: '10px',
              // borderBottom: 'solid 1px #e5e5e5',
            },
            button: {
              pos: 'relative',
              _after: {
                content: '""',
                position: 'absolute',
                left: '0px',
                bottom: '-10px',
                width: '100%',
                height: '1px',
                bg: '#e5e5e5',
              },
              '&[aria-expanded="true"]': {
                _after: {
                  content: 'none',
                },
              },
            },
          },
          typeTree: {
            container: {
              border: 'none',
            },
            button: {
              justifyContent: 'flex-start',
              alignItems: 'center',
              h: '32px',
              fontSize: '20px',
              p: '2px',
              borderRadius: '4px',
              bg: 'transparent',
              mb: '2px',
              _expanded: {
                bg: '#f0ecfb',
                svg: {
                  transform: 'rotate(90deg)',
                },
                '&.active': {
                  bg: '#ECECEC',
                },
              },
            },
            panel: {
              p: '0',
              mb: '2px',
            },
            icon: {
              w: '20px',
              mr: '5px',
              borderRadius: '4px',
              bg: 'transparent',
              _hover: {
                bg: '#ececec',
              },
            },
            root: {
              '&.typeTable': {
                button: {
                  _expanded: {
                    svg: {
                      transform: 'rotate(0deg)',
                    },
                  },
                },
              },
            },
          },
          typeNav: {
            container: {
              border: 'none',
            },
            button: {
              alignItems: 'center',
              h: '44px',
              fontWeight: '500',
              color: '#A4A1B1',
              p: '0 10px',
              borderRadius: '4px',
              cursor: 'pointer',
              mb: '6px',
              '.nav-icon': {
                display: 'inline-block',
                w: '24px',
                color: '#6C6B7F',
              },
              _hover: {
                bg: '#2D2D2F',
                boxShadow: '0px 2px 5px 0px #00000040',
                '.nav-icon': {
                  color: '#A4A1B1',
                },
                '.chakra-accordion__icon': {
                  color: '#A4A1B1',
                },
              },
              _expanded: {
                // bg: '#2D2D2F',
                // boxShadow: '0px 2px 5px 0px #00000040',
                '.nav-icon': {
                  color: '#A4A1B1',
                },
                '.chakra-accordion__icon': {
                  color: '#A4A1B1',
                },
              },
              '&.active': {
                bg: '#6C3DF4',
                '.nav-icon': {
                  color: '#fff',
                },
              },
            },
            panel: {
              '>a': {
                display: 'flex',
                alignItems: 'center',
                h: '44px',
                fontWeight: '500',
                color: '#A4A1B1',
                p: '0 10px',
                borderRadius: '4px',
                cursor: 'pointer',
                mb: '6px',
                '.nav-icon': {
                  display: 'inline-block',
                  w: '24px',
                  color: '#6C6B7F',
                },
                _hover: {
                  bg: '#2D2D2F',
                  boxShadow: '0px 2px 5px 0px #00000040',
                  '.nav-icon': {
                    color: '#A4A1B1',
                  },
                },
                '&.active': {
                  color: '#fff',
                  bg: '#6C3DF4',
                  '.nav-icon': {
                    color: '#fff',
                  },
                  _hover: {
                    bg: '#6C3DF4',
                    boxShadow: '0px 2px 5px 0px #00000040',
                    '.nav-icon': {
                      color: '#fff',
                    },
                  },
                },
              },
            },
            icon: {
              w: '20px',
              h: '20px',
              color: '#6C6B7F',
            },
          },
        },
      },
      Checkbox: {
        variants: {
          typeLabelNone: {
            container: {
              m: '0',
            },
            control: {
              w: '16px',
              h: '16px',
              borderWidth: '1px',
              borderColor: '#909090',
              borderRadius: '2px',
              boxShadow: 'none',
              _focusVisible: {
                boxShadow: 'none',
              },
            },
            icon: {
              w: '8px',
              h: '8px',
            },
            label: {
              fontSize: '0',
              m: '0',
            },
          },
          typeBlue: {
            container: {
              m: '0',
            },
            control: {
              w: '16px',
              h: '16px',
              borderWidth: '1px',
              borderColor: '#909090',
              borderRadius: '2px',
              boxShadow: 'none',
              '&[data-hover], &:hover': {
                background: 'none !important',
                borderColor: '#6C3DF4 !important',
              },
              _focusVisible: {
                boxShadow: 'none',
              },
              '&[data-checked]': {
                background: 'none !important',
                borderColor: '#6C3DF4 !important',
              },
            },
            icon: {
              w: '8px',
              h: '8px',
              color: '#6C3DF4',
            },
            label: {
              fontSize: '0',
              m: '0',
            },
          },
          typeDefault: {
            container: {
              m: '0',
            },
            control: {
              w: '16px',
              h: '16px',
              borderWidth: '1px',
              borderColor: '#909090',
              borderRadius: '2px',
              boxShadow: 'none',
              marginRight: '10px',
              '&[data-hover], &:hover': {
                background: 'none !important',
                borderColor: '#6C3DF4 !important',
              },
              _focusVisible: {
                boxShadow: 'none',
              },
              '&[data-checked]': {
                background: 'none !important',
                borderColor: '#6C3DF4 !important',
              },
            },
            icon: {
              w: '8px',
              h: '8px',
              color: '#6C3DF4',
            },
            label: {
              h: '16px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#1B1B1B',
              p: '0',
              m: '0',
            },
          },
          typeListChk: {
            container: {
              w: 'full',
              h: '60px',
              m: '0',
              pl: '20px',
            },
            control: {
              w: '16px',
              h: '16px',
              borderWidth: '1px',
              borderColor: '#909090',
              borderRadius: '2px',
              boxShadow: 'none',
              marginRight: '10px',
              '&[data-hover], &:hover': {
                background: 'none !important',
                borderColor: '#6C3DF4 !important',
              },
              _focusVisible: {
                boxShadow: 'none',
              },
              '&[data-checked]': {
                background: 'none !important',
                borderColor: '#6C3DF4 !important',
              },
            },
            icon: {
              w: '8px',
              h: '8px',
              color: '#6C3DF4',
            },
            label: {
              h: '16px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#1B1B1B',
              p: '0',
              m: '0',
            },
          },
          typeListChk02: {
            container: {
              h: '34px',
              w: 'full',
              p: '0 12px',
              m: '0 !important',
            },
            control: {
              w: '16px',
              h: '16px',
              borderWidth: '1px',
              borderColor: '#909090',
              borderRadius: '2px',
              boxShadow: 'none',
              marginRight: '8px',
              '&[data-hover], &:hover': {
                background: 'none !important',
                borderColor: '#6C3DF4 !important',
              },
              _focusVisible: {
                boxShadow: 'none',
              },
              '&[data-checked]': {
                background: 'none !important',
                borderColor: '#6C3DF4 !important',
              },
            },
            icon: {
              w: '8px',
              h: '8px',
              color: '#6C3DF4',
            },
            label: {
              fontSize: '14px',
              fontWeight: '500',
              m: '0 !important',
            },
          },
          typeBoxChk: {
            container: {
              flexDirection: 'row-reverse',
              h: '34px',
              w: 'auto',
              border: 'solid 1px #C6C6C6',
              borderRadius: '4px',
              p: '0 7px 0 10px',
              m: '0 !important',
              _hover: {
                borderColor: '#454545',
              },
              _disabled: {
                bg: '#efefef',
                _hover: {
                  borderColor: '#C6C6C6',
                },
              },
            },
            control: {
              w: '16px',
              h: '16px',
              borderWidth: '1px',
              borderColor: '#909090',
              borderRadius: '2px',
              boxShadow: 'none',
              marginLeft: '7px',
              '&[data-hover], &:hover': {
                background: 'none !important',
                borderColor: '#6C3DF4 !important',
              },
              _focusVisible: {
                boxShadow: 'none',
              },
              '&[data-checked]': {
                background: 'none !important',
                borderColor: '#6C3DF4 !important',
              },
              _disabled: {
                borderColor: '#d5d5d5 !important',
                bg: '#fff !important',
                _hover: {
                  borderColor: '#d5d5d5 !important',
                  bg: '#fff !important',
                },
              },
            },
            icon: {
              w: '8px',
              h: '8px',
              color: '#6C3DF4',
            },
            label: {
              fontSize: '13px',
              fontWeight: '500',
              color: '#464646',
              m: '0 !important',
            },
          },
        },
      },
      Radio: {
        variants: {
          typeDefault: {
            container: {
              m: '0 10px 0 0',
            },
            control: {
              width: '20px',
              height: '20px',
              border: 'none !important',
              boxShadow: 'none',
              backgroundImage: 'url(/assets/images/icons/ico-radio-02.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 0',
              '&:before': {
                width: '20px !important',
                height: '20px !important',
                background: 'none',
              },
              _focusVisible: {
                boxShadow: 'none',
              },
              '&[data-checked]': {
                '&:before': {
                  backgroundImage: 'url(/assets/images/icons/ico-radio-02-checked.svg)',
                },
              },
              '&[data-disabled]': {
                backgroundImage: 'url(/assets/images/icons/ico-radio-02-disabled.svg)',
              },
            },
            icon: {},
            label: {
              fontSize: '0',
              m: '0',
            },
          },
          typeBlack: {
            container: {
              m: '0',
            },
            control: {
              width: '20px',
              height: '20px',
              border: 'none !important',
              boxShadow: 'none',
              backgroundImage: 'url(/assets/images/icons/ico-radio-02.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 0',
              '&:before': {
                width: '20px !important',
                height: '20px !important',
                background: 'none',
              },
              _focusVisible: {
                boxShadow: 'none',
              },
              '&[data-checked]': {
                '&:before': {
                  backgroundImage: 'url(/assets/images/icons/ico-radio-02-checked.svg)',
                },
                '&[data-disabled]': {
                  backgroundImage: 'url(/assets/images/icons/ico-radio-02-disabled.svg)',
                },
              },
            },
            icon: {},
            label: {
              fontSize: '14px',
              fontWeight: '500',
              m: '0 0 0 8px',
            },
          },
          typeViolet: {
            container: {
              m: '0',
            },
            control: {
              position: 'relative',
              width: '20px',
              height: '20px',
              boxShadow: 'none',
              border: 'solid 1px #D5D5D5',
              '&:before': {
                width: '18px !important',
                height: '18px !important',
                background: '#fff',
              },
              _focusVisible: {
                boxShadow: 'none',
              },
              '&[data-checked]': {
                border: 'none',
                '&:before': {
                  border: 'solid 1px #6C3DF4',
                  background: '#fff',
                  borderRadius: 'full',
                },
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  left: '4px',
                  top: '4px',
                  display: 'block',
                  width: '12px',
                  height: '12px',
                  borderRadius: 'full',
                  background: '#6C3DF4',
                },
                _disabled: {
                  '&:before': {
                    border: 'solid 1px #E3E3E3 !important',
                  },
                  '&:after': {
                    background: '#E3E3E3 !important',
                  },
                },
              },
              _disabled: {
                background: '#fff',
                border: 'solid 1px #E3E3E3',
              },
            },
            icon: {},
            label: {
              fontSize: '14px',
              fontWeight: '500',
              m: '0 0 0 8px',
            },
          },
        },
      },
      Tag: {
        baseStyle: {
          container: {
            display: 'flex',
            alignItems: 'center',
            minW: 'auto',
            minH: 'auto',
            p: '0 10px',
            bg: '#fff',
          },
          label: {
            textTransform: 'none',
            fontSize: '13px',
            fontWeight: '500',
            color: '#1B1B1B',
            lineHeight: '1.5',
          },
          closeButton: {},
        },
        variants: {
          typeLine: {
            container: {
              h: '30px',
              borderRadius: 'full',
              border: 'solid 1px #E4E4E4',
              cursor: 'pointer',
              _hover: {
                borderColor: '#909090',
              },
              '&.active': {
                borderColor: '#6C3DF4',
                bg: '#f0ecfb',
              },
            },
            label: {
              p: '0 5px',
            },
          },
          update: {
            container: {
              h: '19px',
              lineHeight: '1',
              color: '#6C3DF4',
              fontSize: '10px',
              fontWeight: '800',
              p: '0 4px',
              borderRadius: '4px',
              border: 'solid 1px #6C3DF4',
              bg: 'transparent',
            },
          },
        },
      },
      Switch: {
        variants: {
          default: {
            track: {
              width: '34px',
              height: '18px',
              p: '0',
              border: 'solid 1px #C6C6C6',
              background: '#C6C6C6',
              '&[data-checked]': {
                borderColor: '#6C3DF4',
                background: '#6C3DF4',
              },
            },
            thumb: {
              width: '14px',
              height: '14px',
              m: '2px',
              background: '#fff',
              '&[data-checked]': {
                background: '#fff',
                transform: 'translateX(16px)',
              },
            },
          },
        },
      },
      Alert: {
        variants: {
          toastInfo: {
            container: {
              fontSize: '15px',
              fontWeight: '500',
              lineHeight: '1.6',
              color: '#fff',
              // p: '10px 15px',
              borderRadius: '6px',
              bg: '#5176D5',
              '>button': {
                display: 'none',
                top: '9px',
                right: '13px',
              },
            },
            icon: {
              width: '20px',
              height: '20px',
              marginRight: '10px',
              backgroundImage: 'url(/assets/images/icons/ico-toast-info.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 1px',
              '>svg': {
                display: 'none',
              },
            },
            title: {
              fontWeight: '700',
              mb: '5px',
            },
            description: {},
          },
          // toastError: {
          //   container: {
          //     p: '8px 30px',
          //     borderRadius: '6px',
          //     border: 'solid 1px #E43F3FCC',
          //     bg: '#f3dada',
          //     '>button': {
          //       top: '9px',
          //       right: '13px',
          //     },
          //   },
          //   icon: {
          //     width: '20px',
          //     height: '20px',
          //     padding: '2.42px',
          //     color: '#E43F3F',
          //     marginRight: '10px',
          //   },
          //   title: {
          //     fontWeight: '700',
          //     mb: '5px',
          //   },
          //   description: {
          //     fontSize: '15px',
          //     fontWeight: '500',
          //     lineHeight: '1.5',
          //     color: "#D61919",
          //   },
          // },
          toastError: {
            container: {
              fontSize: '15px',
              fontWeight: '500',
              lineHeight: '1.6',
              color: '#323232',
              // p: '8px 15px',
              border: 'solid 1px #e53e3e',
              borderRadius: '6px',
              bg: '#fff',
              '>button': {
                display: 'none',
                top: '9px',
                right: '13px',
              },
            },
            icon: {
              width: '20px',
              height: '20px',
              marginRight: '10px',
              backgroundImage: 'url(/assets/images/icons/ico-toast-error.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 1px',
              '>svg': {
                display: 'none',
              },
            },
            title: {
              fontWeight: '700',
              mb: '5px',
            },
            description: {},
          },
          toastSuccess: {
            container: {
              fontSize: '15px',
              fontWeight: '500',
              lineHeight: '1.6',
              color: '#323232',
              // p: '8px 15px',
              border: 'solid 1px #6fc491',
              borderRadius: '6px',
              bg: '#f0f7f3',
              '>button': {
                display: 'none',
                top: '9px',
                right: '13px',
              },
            },
            icon: {
              width: '20px',
              height: '20px',
              marginRight: '10px',
              backgroundImage: 'url(/assets/images/icons/ico-toast-success.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 1px',
              '>svg': {
                display: 'none',
              },
            },
            title: {
              fontWeight: '700',
              mb: '5px',
            },
            description: {},
          },
          toastWarning: {
            container: {
              fontSize: '15px',
              fontWeight: '500',
              lineHeight: '1.6',
              color: '#323232',
              // p: '8px 15px',
              border: 'solid 1px #dd6b20',
              borderRadius: '6px',
              bg: '#fff',
              '>button': {
                display: 'none',
                top: '9px',
                right: '13px',
              },
            },
            icon: {
              width: '20px',
              height: '20px',
              marginRight: '10px',
              backgroundImage: 'url(/assets/images/icons/ico-toast-warning.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 1px',
              '>svg': {
                display: 'none',
              },
            },
            title: {
              fontWeight: '700',
              mb: '5px',
            },
            description: {},
          },
        },
      },
      Divider: {
        baseStyle: {
          opacity: '1',
        },
      },
    },
  }
);

export default theme;
