import {  reactive, computed, onMounted, h  } from './VueShadow.mjs.js';
import { CMR } from './Shadow.mjs.js';
import BsBadge from './bs/BsBadge.cpnt.mjs.js';
import gen_editModeSection from './AnnotatingModes/mode_edit.mjs.js';
import gen_commentModeSection from './AnnotatingModes/mode_comment.mjs.js';
import gen_multiSpansModeSection from './AnnotatingModes/mode_multiSpans.mjs.js';
import gen_SpaCE2022_Task2_ModeSection from './AnnotatingModes/mode_SpaCE2022_Task2.mjs.js';
import gen_SpaCE2022_Task2R_ModeSection from './AnnotatingModes/mode_SpaCE2022_Task2R.mjs.js';
// import gen_CSpaceBank_ModeSection from './AnnotatingModes/mode_CSpaceBank.mjs.js';

import CmrUI from './AnnotatingCMR/CmrUI.cpnt.mjs.js';

export default {
  props: ["user", "canSave", "example", "backendUsage", "step", "engine", "tokenSelector", "stepCtrl", "tokens", "selection", "alertBox", "modifiedText"],
  emits: ["web-next", "web-save", "web-save-and-next", "ok", "start", "clean", "cancel", "reset", "next", "add-to-list", "clear-selection", "option"],
  component: {
    BsBadge,
    CmrUI,
  },
  setup(props, ctx) {

    const div = (attrs, children) => {
      return h("div", attrs, children);
    };

    const span = (attrs, children) => {
      return h("span", attrs, children);
    };

    const someBtn = (btnSettings, clickFn, defaultText, disabled) => {
      return btnSettings ? h("button", {
        'type': "button",
        'class': ["btn btn-sm my-1 me-1", `btn-${btnSettings?.style??"outline-primary"}`],
        'onClick': ()=>{
          clickFn(btnSettings?.go);
          // console.log(selection_length.value);
          // console.log([btnSettings, clickFn, defaultText, disabled]);
        },
        'disabled': disabled??false,
      }, [
        btnSettings?.text ?? defaultText,
      ]) : null;
    };

    const someKeyText = (key) => {
      return step_props.value?.[key] ? div({ 'class': "col col-12 my-1", }, [
        div({ }, [ step_props.value?.[key], ]),
      ]) : null;
    };

    const someKeyString = (key) => {
      return step_props.value?.strings?.[key] ? div({ 'class': "col col-12 my-1", }, [
        div({ }, [ step_props.value?.strings?.[key], ]),
      ]) : null;
    };

    const modeMap = {
      "default": null,
      "finalResult": "finalResult",
      "selectValue": "selectValue",
      "interlude": "interlude",
      "multiSpans": "multiSpans",
      "add": "add",
      "modify": "modify",
      "delete": "delete",
      "choose": "choose",
      "text": "text",
      "root": "root",
      "SpaCE2022_Task2": "SpaCE2022_Task2",
      "CSpaceBank": "CSpaceBank",
    };

    const tokenSelector = props.tokenSelector;
    const alertBox = props.alertBox;
    const stepCtrl = props.stepCtrl;

    const mode = computed(()=>props.step?.mode);
    const modeMatch = (...list) => {
      return list.map(it => modeMap[it]).includes(modeMap[mode.value])
    };

    const selection_length = computed(()=>(props.selection?.array?.length??0));

    const step_props = computed(()=>props.step?.props);

    const isWeb = computed(()=>(props.engine??"").toLowerCase() == "web");

    const idxesToText = (idxes)=>{
      idxes = idxes??[];
      if (!props.tokens?.length) {
        return JSON.stringify(idxes);
      };
      return idxes.map(idx => props.tokens[idx]?.to?.word ?? props.tokens[idx]?.word ?? `[????????????${idx}]`).join("");
    };

    const clearSelector = () => {tokenSelector.clear(props.tokens)};





    const webButtonsDiv = () => [
      // ?????????????????????
      // finalResult ??????
      // ????????????????????? ??????????????? ?????????
      div({ 'class': "col col-12 my-1", }, [

        // false ? someBtn({
        //   style: "success",
        //   text: "???????????????????????????",
        // }, ()=>{ctx.emit('web-next')}, "???????????????????????????") : null,

        // false ? someBtn({
        //   style: "success",
        //   text: "??????",
        // }, ()=>{ctx.emit('web-save')}, "??????") : null,

        // ???????????????????????? ??????

        props.canSave ? someBtn({
          style: "success",
          text: "???????????????",
        }, ()=>{ctx.emit('web-save-and-next')}, "???????????????") : someBtn({
          style: "info",
          text: "?????????",
        }, ()=>{ctx.emit('web-next')}, "?????????"),
      ]),
    ][0];

    const generalButtonsDiv = (fnObj, disableObj) => {
      const fnDict = {
        ok: (go)=>{ctx.emit('ok', go)},
        start: (go)=>{ctx.emit('start', go)},
        continue: (go)=>{ctx.emit('continue', go)},
        // clean: (go)=>{ctx.emit('clean', go)},
        cancel: (go)=>{ctx.emit('cancel', go)},
        reset: (go)=>{ctx.emit('reset', go)},
        next: (go)=>{ctx.emit('next', go)},
      };
      const disableDict = {
        ok: ()=>false,
        start: ()=>false,
        continue: ()=>false,
        // clean: ()=>false,
        cancel: ()=>false,
        reset: ()=>false,
        next: ()=>false,
      };

      if (fnObj==null) {fnObj={}};
      Object.assign(fnDict, fnObj);

      if (disableObj==null) {disableObj={}};
      Object.assign(disableDict, disableObj);

      return div({ 'class': "col col-12 my-1", }, [
        someBtn(step_props.value?.okBtn, fnDict['ok'], "??????", disableDict['ok']()),
        someBtn(step_props.value?.startBtn, fnDict['start'], "??????", disableDict['start']()),
        someBtn(step_props.value?.continueBtn, fnDict['continue'], "????????????", disableDict['continue']()),
        // someBtn(step_props.value?.cleanBtn, fnDict['clean'], "??????", disableDict['clean']()),
        someBtn(step_props.value?.cancelBtn, fnDict['cancel'], "??????", disableDict['cancel']()),
        someBtn(step_props.value?.resetBtn, fnDict['reset'], "??????", disableDict['reset']()),
        isWeb.value ? null : someBtn(step_props.value?.nextBtn, fnDict['next'], "?????????", disableDict['next']()),  // ???????????????
      ]);
    };





    const __pack = {
      reactive, computed, onMounted, h,
      BsBadge,
      props, ctx,

      div,
      span,
      someBtn,
      someKeyText,
      someKeyString,
      modeMap,

      tokenSelector,
      alertBox,
      stepCtrl,

      mode,
      modeMatch,

      selection_length,
      step_props,
      isWeb,

      idxesToText,
      clearSelector,

      webButtonsDiv,
      generalButtonsDiv,

      __LODASH: _,
      CMR,
    };



    const editModeSection = gen_editModeSection(__pack);
    const commentModeSection = gen_commentModeSection(__pack);
    const multiSpansModeSection = gen_multiSpansModeSection(__pack);

    const theSpaCE2022_Task2_ModeSection = gen_SpaCE2022_Task2_ModeSection(__pack);
    const theSpaCE2022_Task2R_ModeSection = gen_SpaCE2022_Task2R_ModeSection(__pack);
    // const theCSpaceBank_ModeSection = gen_CSpaceBank_ModeSection(__pack);

    return () => div({ 'class': "row", 'data-mode': mode.value, }, [
      ...(modeMatch("add", "modify", "delete") ? editModeSection() : []),
      ...(modeMatch("choose", "text") ? commentModeSection() : []),
      ...(modeMatch("multiSpans") ? multiSpansModeSection() : []),
      ...(modeMatch("SpaCE2022_Task2") ? theSpaCE2022_Task2_ModeSection() : []),
      ...(modeMatch("SpaCE2022_Task2R") ? theSpaCE2022_Task2R_ModeSection() : []),

      (modeMatch("CSpaceBank") ? h(CmrUI, {
        'user': props.user,
        'tokenSelector': props.tokenSelector,
        'selection': props.selection,
        'stepCtrl': props.stepCtrl,
        'alertBox': props.alertBox,
        'example': props.example,
        'backendUsage': props.backendUsage,
        'step': props.step,
        'stepProps': step_props.value,
        onSave: (data)=>{
          console.log(data);
          props.stepCtrl.????????????(data);
          props.backendUsage.save(props.example);
        },
        onGoPrev: (data)=>{
          props.backendUsage.prev(props.example);
        },
        onGoNext: (data)=>{
          props.backendUsage.next(props.example);
        },
      }) : null),
      // ...(modeMatch("CSpaceBank") ? theCSpaceBank_ModeSection() : []),

      // ?????????
      // finalResult ??????
      // selectValue ??????
      // interlude ?????? ??? showResults ????
      // root ?????? ????
      modeMatch("finalResult", "selectValue", "root") ? someKeyText("instruction") : null,
      modeMatch("interlude") /*&& step_props.value?.showResults*/ ? someKeyText("instruction") : null,

      // ???????????????
      // selectValue ??????
      // interlude ?????? ????
      modeMatch("selectValue", "interlude") &&
      step_props.value?.optionBtns ? div({ 'class': "col col-12 my-1", }, [
        ...step_props.value?.optionBtns.map(btn => someBtn(btn, ()=>{
          ctx.emit('option', btn);
          stepCtrl.goRefStep(btn.go, btn.data);
        })),
      ]) : null,


      // ????????????????????????????????????????????????????????????????????????????????????????????????
      // ???????????? ok       | selectValue | interlude ???? | multiSpans | add | modify | delete | choose | text
      // ???????????? start    | root ????
      // ???????????? clean ?????? |                            | multiSpans
      // ???????????? cancel   | finalResult |              | multiSpans | add | modify | delete | choose | text
      // ???????????? reset    | selectValue | interlude ???? | finalResult
      // ??????????????? next   | finalResult ??????
      modeMatch("finalResult", "selectValue", "interlude", "root") ? generalButtonsDiv({
        'cancel': ()=>{stepCtrl.cancelStep(step_props.value?.cancelBtn?.go)},
        'start': ()=>{stepCtrl.cancelStep(step_props.value?.startBtn?.go)},
        'continue': ()=>{stepCtrl.cancelStep(step_props.value?.continueBtn?.go)},
        'reset': ()=>{stepCtrl.resetStep(step_props.value?.resetBtn?.go)},
        'next': ()=>{stepCtrl.nextStep(step_props.value?.nextBtn?.go)},
        'ok': ()=>{stepCtrl.goRefStep(step_props.value?.okBtn?.go)},
      }) : null,


      // ?????????????????????
      // finalResult ??????
      // ????????????????????? ??????????????? ?????????
      modeMatch("finalResult") && isWeb.value ? webButtonsDiv() : null,

      // ??????
      // div({ 'class': "col col-12 my-1", }, []),
    ]);


  },
};


