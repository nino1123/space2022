
const genModeSection = (__pack) => {

  let {
    div, span, h,
    BsBadge,
    generalButtonsDiv,
    someKeyString, someKeyText,
    idxesToText,
    clearSelector,
    step_props, stepCtrl, alertBox,
    selection_length,
    props, ctx,
    __LODASH,
  } = __pack;

  return () => {
    // 目前包括两种 actualMode:
    //   doubleSpans, spanWithComment
    // 各种指导语写在 step_props.value?.strings 对象里，通过 someKeyString 函数调用
    //   chooseInstruction, selectInstruction

    // data 里有 items 数组，存放各个子 data
    // 需要 StepControl.mjs.js 相应配合???不用了，直接输出多个 data 到 annotations 里

    const ensureOptionItem = (optIdx) => {
      if (!('items' in step_props.value.data)) {
        step_props.value.data.items=[];
      };
      if (!step_props.value.data.items[optIdx]) {
        step_props.value.data.items[optIdx]={};
      };
    };
    const ensureSlot = (optIdx, slotIdx) => {
      ensureOptionItem(optIdx);
      if (!('slots' in step_props.value.data.items[optIdx])) {
        step_props.value.data.items[optIdx].slots=[];
      };
      if (!step_props.value.data.items[optIdx].slots[slotIdx]) {
        step_props.value.data.items[optIdx].slots[slotIdx]={};
      };
    };
    const getOptionItem = (optIdx) => {
      return step_props.value?.data?.items?.[optIdx];
    };
    const touchOptionItem = (optIdx) => {
      ensureOptionItem(optIdx);
      return getOptionItem(optIdx);
    };
    const getSlot = (optIdx, slotIdx) => {
      return step_props.value?.data?.items?.[optIdx]?.slots?.[slotIdx];
    };
    const touchSlot = (optIdx, slotIdx) => {
      ensureSlot(optIdx, slotIdx);
      return getSlot(optIdx, slotIdx);
    };
    // const setSlot = (optIdx, slotIdx, data) => {
    //   ensureSlot(optIdx, slotIdx);
    //   step_props.value.data.items[optIdx].slots[slotIdx] = data;
    // };
    const 已填 = (optIdx, slotIdx) => {
      return null != getSlot(optIdx, slotIdx)?.tokenarray;
    };

    const dealWithData = (data) => {
      if (!stepCtrl?.ewp?.example?.annotations?.length) {
        stepCtrl.ewp.example.annotations = [];
      };
      let idx = stepCtrl.ewp.example.annotations.length;
      data.idx = idx;
      data.mode = data.displayMode;

      stepCtrl.ewp.example.annotations.push(JSON.parse(JSON.stringify(data)));
      return data;
    };

    const processDataList = () => {
      let dataList = [];
      for (let optIdx in step_props.value?.data?.items??[]) {
        let item = step_props.value?.data?.items?.[optIdx];
        if (!!item && item.shouldTake) {
          let data = step_props.value?.options?.[optIdx]?.data;
          for (let slot of item.slots??[]) {
            if (slot?.withText?.length && 'withText' in data) {
              data.withText = slot.withText;
            };
            if (slot?.tokenarray?.length && 'tokenarrays' in data) {
              data.tokenarrays.push(slot.tokenarray);
            };
            if (slot?.tokenarray?.length && 'on' in data) {
              data.on = slot.tokenarray;
            };
          };
          dataList.push(data);
        };
      };
      return dataList;
    };

    const canSubmit = () => {
      const items = step_props.value?.data?.items?.filter?.(it=>it?.shouldTake)??[];
      const jj1 = items.length>0;
      let jj2 = true;
      outter:
      for (let item of items) {
        const slots = item?.slots?.filter?.(it=>it)??[];
        if ((slots?.length??0)<2) {jj2 = false; break outter;};
        for (let slot of slots??[]) {
          if ('tokenarray' in slot && !slot.tokenarray?.length) {jj2 = false; break outter;};
          if ('withText' in slot && !slot.withText?.length) {jj2 = false; break outter;};
        };
      };
      return jj1 && jj2;
    };

    const checkBeforeSubmit = () => {
      let checkResult = true;
      const items = step_props.value?.data?.items?.filter?.(it=>it?.shouldTake)??[];
      let hasReplacedToken = false;
      let hasHighlightedToken = false;
      let hasIntersection = false;
      // outter:
      for (let item of items) {
        const slots = item?.slots?.filter?.(it=>it)??[];
        let tokenarrays = [];
        for (let slot of slots??[]) {
          if ('tokenarray' in slot && slot.tokenarray?.length) {
            tokenarrays.push(slot.tokenarray);
            if (tokenarrays.length>1) {
              let aa = tokenarrays.at(-1);
              let bb = tokenarrays.at(-2);
              if (__LODASH.intersection(aa, bb).length>0) {
                hasIntersection = true;
              };
            };
            for (let tokenIdx of slot.tokenarray) {
              let token = props.tokens[tokenIdx];
              if (!!token?.to?.word?.length) {
                hasReplacedToken = true;
              };
              let isAutoSpatial = token?.autoSpatial&&["f", "s", "dv"].includes?.(token?.pos);
              const list = ["快速", "迅速", "急速", "缓慢", "慢速", "低速", "快快", "慢慢", "缓缓", "到处", "处处", "四处", "随处", "一起", "一齐", "单独", "独自", "健步", "缓步", "大步", "小步", "单向", "双向", "当场", "就近", "当面", "正面", "中途", "顺路", "向", "到", "往", "自", "朝", "在", "距", "经", "从", "由", "沿", "沿着", "朝着", "向着", "对着", "顺着", "通过"];
              const inList = (token) => {
                let word = token?.to?.word ?? token?.word;
                return list.includes(word);
              };
              let isInList = inList(token)&&["p", "d"].includes?.(token?.pos);
              let isAutoEntity = token?.autoEntity&&["n", "ns", "nr"].includes?.(token?.pos);
              if (isInList||isAutoSpatial) {
                hasHighlightedToken = true;
              }
            };
          };
        };
      };
      if (!hasHighlightedToken) {
        alertBox.pushAlert('选中的范围内没有出现高亮词，请检查', 'warning', 5000);
        checkResult=false;
        // return checkResult;
      };
      if (!hasReplacedToken) {
        alertBox.pushAlert('似乎没有覆盖造成异常的关键片段，最好再检查一下', 'warning', 5000);
      };
      // if (hasIntersection) {
      //   alertBox.pushAlert('某条标注中的两个文本片段存在交集，请确认无误再保存', 'warning', 5000);
      // };
      return checkResult;
    };

    return [
      // 总指导语
      someKeyString("instruction"),

      // options 列出了每个选项的情况
      // option.actualMode  -- 实际模式
      // option.data  -- 最后要保存的数据形式
      //   根据 option.data.displayMode 来决定提供什么样的数据格式
      // option.slots  -- 显示时罗列的槽位信息
      //   slot.type   -- select 在文中选择文本片段, solid-text 固定的文本, input-text 输入文本
      //   slot.value  -- 目前仅是 solid-text 的 文本内容
      div({ 'class': "col col-12 my-1", }, [
        div({}, step_props.value?.options?.map?.((option, optIdx)=>{

          const onInputFn = option.actualMode == "spanWithComment" ? (optIdx, slotIdx, event)=>{
            touchSlot(optIdx, slotIdx).withText=event.target.value;
          } : ()=>{};

          return div({'class': "--d-inline-block"}, div({
            'class': "input-group input-group-sm my-1",
            'key': optIdx,
          }, [
            span({'class': "input-group-text"}, h("input", {
              'class': "form-check-input mt-0",
              'type': "checkbox",
              'checked': touchOptionItem(optIdx)?.shouldTake,
              'onChange': (event)=>{
                // console.log(event.target.checked);
                let shouldTake = event.target.checked;
                touchOptionItem(optIdx).shouldTake = shouldTake;
              },
            })),
            ...option?.slots?.map?.((slot, slotIdx)=>{
              if (slot.type=="solid-text") {
                return span({'class': "input-group-text", 'key': slotIdx}, [slot.value]);
              };
              if (slot.type=="select") {
                if (!已填(optIdx, slotIdx)||!touchOptionItem(optIdx).shouldTake) {
                  // 还没填写时
                  // 1、如果还没选文本，则显示「💬」，鼠标移上去的时候显示「 selectInstruction “请在文中选择文本” 」
                  // 2、如果选择了文本，则显示「⤵️」，鼠标移上去的时候显示「 insertInstruction “将选中的文本填入此处” 」
                  return div({
                    'class': ["form-control d-inline-block text-center", {
                      "disabled bg-gray-200": !touchOptionItem(optIdx).shouldTake,
                      "cursor-pointer": touchOptionItem(optIdx).shouldTake&&selection_length.value,
                    }], 'key': slotIdx,
                    'title': step_props.value?.strings?.[selection_length.value?'insertInstruction':null],
                    'disabled': !touchOptionItem(optIdx).shouldTake,
                  }, touchOptionItem(optIdx).shouldTake ? h(BsBadge, {
                    'class': ["rounded-pill m-1", {
                      "cursor-help": !selection_length.value,
                    }],
                    'title': step_props.value?.strings?.[selection_length.value?'insertInstruction':'selectInstruction'],
                    'onClick': (event)=>{
                      if (!selection_length.value) {return;};
                      touchSlot(optIdx, slotIdx).tokenarray = props.selection.array;
                      clearSelector();
                    },
                  }, [selection_length.value?"填入 ⤵️":"💬"]) : null);
                };
                if (已填(optIdx, slotIdx)&&touchOptionItem(optIdx).shouldTake) {
                  let text = idxesToText(getSlot(optIdx, slotIdx)?.tokenarray??[]);
                  return div({'class': "form-control d-inline-block text-center text-break", 'key': slotIdx}, [h(BsBadge, {
                    'class': "rounded-pill m-1 text-wrap text-break",
                    'canRemove': true,
                    'onRemove': (event)=>{
                      touchSlot(optIdx, slotIdx).tokenarray = null;
                    },
                  }, [
                    text, selection_length.value ? h("span", {
                      class: ["bagde-close-btn", "ms-2", "cursor-pointer", "text-muted"],
                      onClick: ()=>{
                        touchSlot(optIdx, slotIdx).tokenarray = [...touchSlot(optIdx, slotIdx).tokenarray, ...props.selection.array];
                        clearSelector();
                      },
                    }, ["➕"]) : null,
                  ])]);
                };
              };
              if (slot.type=="input-text") {return h("textarea", {
                'class': "form-control form-control-sm text-center",
                'disabled': !touchOptionItem(optIdx).shouldTake,
                'row': "1",
                // 'type': "text",
                'key': slotIdx,
                'onInput': (event)=>{onInputFn(optIdx, slotIdx, event)},
                // 'placeholder': step_props.value?.instruction,
              })}
            }),


          ]));
        })),
      ]),

      // 通用结束按钮区
      generalButtonsDiv({
        'ok': async(go)=>{
          const checkResult = checkBeforeSubmit();
          if (!checkResult) {return;};
          // await stepCtrl.handle_SpaCE2022_Task2(step_props.value?.okBtn?.go, step_props.value?.data);
          const dataList = processDataList();
          for (let data of dataList) {
            dealWithData(data);
          };
          clearSelector();
          await stepCtrl.goRefStep(go);
        },
        'reset': ()=>{
          step_props.value.data.items=[];
          clearSelector();
        },
        'cancel': ()=>{
          stepCtrl.cancelStep(step_props.value?.cancelBtn?.go);
          clearSelector();
        },
      }, {
        'ok': ()=>!canSubmit(),
        'cancel': ()=>false,
      }),

    ];
  };
};

export default genModeSection;

