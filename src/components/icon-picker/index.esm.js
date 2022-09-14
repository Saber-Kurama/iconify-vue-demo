import { createApp, defineComponent, ref, watch, resolveComponent, openBlock, createBlock, withCtx, createVNode, resolveDynamicComponent, createElementBlock, Fragment, renderList, renderSlot } from "vue";
import { Popover, Input, Row, Col, Card } from "@arco-design/web-vue";
import * as arcoIcons from "@arco-design/web-vue/es/icon";
var index_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const app = createApp(defineComponent);
const icons = arcoIcons;
const Arr = [
  "IconArrowDown",
  "IconArrowFall",
  "IconArrowLeft",
  "IconArrowRight",
  "IconArrowRise",
  "IconArrowUp",
  "IconCaretDown",
  "IconCaretLeft",
  "IconCaretRight",
  "IconCaretUp",
  "IconDoubleDown",
  "IconDoubleLeft",
  "IconDoubleRight",
  "IconDoubleUp",
  "IconDownCircle",
  "IconDown",
  "IconDragArrow",
  "IconExpand",
  "IconLeftCircle",
  "IconLeft",
  "IconMenuFold",
  "IconMenuUnfold",
  "IconRightCircle",
  "IconRight",
  "IconRotateLeft",
  "IconRotateRight",
  "IconShrink",
  "IconSwap",
  "IconToBottom",
  "IconToLeft",
  "IconToRight",
  "IconToTop",
  "IconUpCircle",
  "IconUp",
  "IconCheckCircleFill",
  "IconCloseCircleFill",
  "IconExclamationCircleFill",
  "IconExclamationPolygonFill",
  "IconInfoCircleFill",
  "IconMinusCircleFill",
  "IconPlusCircleFill",
  "IconQuestionCircleFill",
  "IconCheckCircle",
  "IconCheckSquare",
  "IconCheck",
  "IconClockCircle",
  "IconCloseCircle",
  "IconClose",
  "IconExclamationCircle",
  "IconExclamation",
  "IconInfoCircle",
  "IconInfo",
  "IconMinusCircle",
  "IconMinus",
  "IconPlusCircle",
  "IconPlus",
  "IconQuestionCircle",
  "IconQuestion",
  "IconStop",
  "IconHeartFill",
  "IconStarFill",
  "IconThumbDownFill",
  "IconThumbUpFill",
  "IconAt",
  "IconCloudDownload",
  "IconCodeBlock",
  "IconCodeSquare",
  "IconCode",
  "IconCustomerService",
  "IconDownload",
  "IconExport",
  "IconEyeInvisible",
  "IconEye",
  "IconHeart",
  "IconHistory",
  "IconHome",
  "IconImport",
  "IconLaunch",
  "IconList",
  "IconMessageBanned",
  "IconMessage",
  "IconMoreVertical",
  "IconMore",
  "IconPoweroff",
  "IconRefresh",
  "IconReply",
  "IconSave",
  "IconScan",
  "IconSearch",
  "IconSelectAll",
  "IconSend",
  "IconSettings",
  "IconShareAlt",
  "IconShareExternal",
  "IconShareInternal",
  "IconStar",
  "IconSync",
  "IconThumbDown",
  "IconThumbUp",
  "IconTranslate",
  "IconUpload",
  "IconVoice",
  "IconAlignCenter",
  "IconAlignLeft",
  "IconAlignRight",
  "IconAttachment",
  "IconBgColors",
  "IconBold",
  "IconBrush",
  "IconCopy",
  "IconDelete",
  "IconEdit",
  "IconEraser",
  "IconFilter",
  "IconFindReplace",
  "IconFontColors",
  "IconFormula",
  "IconH1",
  "IconH2",
  "IconH3",
  "IconH4",
  "IconH5",
  "IconH6",
  "IconH7",
  "IconHighlight",
  "IconItalic",
  "IconLineHeight",
  "IconLink",
  "IconObliqueLine",
  "IconOrderedList",
  "IconOriginalSize",
  "IconPaste",
  "IconQuote",
  "IconRedo",
  "IconScissor",
  "IconSortAscending",
  "IconSortDescending",
  "IconSort",
  "IconStrikethrough",
  "IconUnderline",
  "IconUndo",
  "IconUnorderedList",
  "IconZoomIn",
  "IconZoomOut",
  "IconMuteFill",
  "IconPauseCircleFill",
  "IconPlayArrowFill",
  "IconPlayCircleFill",
  "IconSkipNextFill",
  "IconSkipPreviousFill",
  "IconSoundFill",
  "IconBackward",
  "IconForward",
  "IconFullscreenExit",
  "IconFullscreen",
  "IconLiveBroadcast",
  "IconMusic",
  "IconMute",
  "IconPauseCircle",
  "IconPause",
  "IconPlayArrow",
  "IconPlayCircle",
  "IconRecordStop",
  "IconRecord",
  "IconSkipNext",
  "IconSkipPrevious",
  "IconSound",
  "IconBytedanceColor",
  "IconLarkColor",
  "IconTiktokColor",
  "IconXiguaColor",
  "IconFaceBookCircleFill",
  "IconFacebookSquareFill",
  "IconGoogleCircleFill",
  "IconQqCircleFill",
  "IconTwitterCircleFill",
  "IconWeiboCircleFill",
  "IconAlipayCircle",
  "IconCodeSandbox",
  "IconCodepen",
  "IconFacebook",
  "IconGithub",
  "IconGitlab",
  "IconGoogle",
  "IconQqZone",
  "IconQq",
  "IconTwitter",
  "IconWechat",
  "IconWechatpay",
  "IconWeibo",
  "IconChineseFill",
  "IconEnglishFill",
  "IconFaceFrownFill",
  "IconFaceMehFill",
  "IconFaceSmileFill",
  "IconMoonFill",
  "IconPenFill",
  "IconSunFill",
  "IconApps",
  "IconArchive",
  "IconBarChart",
  "IconBook",
  "IconBookmark",
  "IconBranch",
  "IconBug",
  "IconBulb",
  "IconCalendarClock",
  "IconCalendar",
  "IconCamera",
  "IconCloud",
  "IconCommand",
  "IconCommon",
  "IconCompass",
  "IconComputer",
  "IconCopyright",
  "IconDashboard",
  "IconDesktop",
  "IconDice",
  "IconDragDotVertical",
  "IconDragDot",
  "IconDriveFile",
  "IconEar",
  "IconEmail",
  "IconEmpty",
  "IconExperiment",
  "IconFileAudio",
  "IconFileImage",
  "IconFilePdf",
  "IconFileVideo",
  "IconFile",
  "IconFire",
  "IconFolderAdd",
  "IconFolderDelete",
  "IconFolder",
  "IconGift",
  "IconIdcard",
  "IconImageClose",
  "IconImage",
  "IconInteraction",
  "IconLanguage",
  "IconLayers",
  "IconLayout",
  "IconLoading",
  "IconLocation",
  "IconLock",
  "IconLoop",
  "IconMan",
  "IconMenu",
  "IconMindMapping",
  "IconMobile",
  "IconMoon",
  "IconMosaic",
  "IconNav",
  "IconNotificationClose",
  "IconNotification",
  "IconPalette",
  "IconPen",
  "IconPhone",
  "IconPrinter",
  "IconPublic",
  "IconPushpin",
  "IconQrcode",
  "IconRelation",
  "IconRobotAdd",
  "IconRobot",
  "IconSafe",
  "IconSchedule",
  "IconShake",
  "IconSkin",
  "IconStamp",
  "IconStorage",
  "IconSubscribeAdd",
  "IconSubscribe",
  "IconSubscribed",
  "IconSun",
  "IconTag",
  "IconTags",
  "IconThunderbolt",
  "IconTool",
  "IconTrophy",
  "IconUnlock",
  "IconUserAdd",
  "IconUserGroup",
  "IconUser",
  "IconVideoCamera",
  "IconWifi",
  "IconWoman"
];
Object.keys(icons).forEach((key) => {
  app.component(key, icons[key]);
});
const _sfc_main = defineComponent({
  name: "IconPicker",
  components: {
    Popover,
    Input,
    Row,
    Col,
    Card
  },
  props: {
    icon: String
  },
  emits: ["update:icon"],
  setup(props, context) {
    const iconArr = ref(Arr);
    const visible = ref(false);
    const searchValue = ref("");
    const iconArrs = icons;
    const handleClick = (icon) => {
      visible.value = false;
      context.emit("update:icon", icon);
    };
    const filterIcon = () => {
      if (searchValue.value) {
        iconArr.value = Arr.filter((item) => {
          return item.toLowerCase().includes(searchValue.value);
        });
      } else {
        iconArr.value = Arr;
      }
    };
    watch(visible, () => {
      searchValue.value = "";
      iconArr.value = Arr;
    });
    return {
      iconArrs,
      iconArr,
      handleClick,
      visible,
      searchValue,
      filterIcon
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Input = resolveComponent("Input");
  const _component_Card = resolveComponent("Card");
  const _component_Col = resolveComponent("Col");
  const _component_Row = resolveComponent("Row");
  const _component_Popover = resolveComponent("Popover");
  return openBlock(), createBlock(_component_Popover, {
    "popup-visible": _ctx.visible,
    "onUpdate:popup-visible": _cache[1] || (_cache[1] = ($event) => _ctx.visible = $event),
    position: "bottom",
    trigger: "click",
    "content-style": { width: "450px", overflow: "hidden", height: "258px", "overflow-y": "scroll" }
  }, {
    title: withCtx(() => [
      createVNode(_component_Input, {
        modelValue: _ctx.searchValue,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.searchValue = $event),
        placeholder: "\u8BF7\u8F93\u5165\u9700\u8981\u641C\u7D22\u7684\u56FE\u6807\u4EE3\u7801 ...",
        style: { "margin-bottom": "8px" },
        onInput: _ctx.filterIcon
      }, {
        suffix: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconArrs["IconSearch"])))
        ]),
        _: 1
      }, 8, ["modelValue", "onInput"])
    ]),
    content: withCtx(() => [
      createVNode(_component_Row, { gutter: [8, 8] }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.iconArr, (item, index2) => {
            return openBlock(), createBlock(_component_Col, {
              key: index2,
              span: 4
            }, {
              default: withCtx(() => [
                createVNode(_component_Card, {
                  hoverable: "",
                  onClick: ($event) => _ctx.handleClick(item),
                  style: { widht: "60px", height: "35px", display: "flex", "justify-content": "center", "align-items": "center", cursor: "pointer" }
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconArrs[item]), { style: { "font-size": "16px" } }))
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      })
    ]),
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "iconSelect")
    ]),
    _: 3
  }, 8, ["popup-visible"]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
