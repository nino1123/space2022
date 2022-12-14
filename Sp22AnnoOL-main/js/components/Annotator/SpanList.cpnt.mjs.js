import { h } from '../../modules_lib/vue_3.2.31_.esm-browser.prod.min.js';
import BsBadge from '../bs/BsBadge.cpnt.mjs.js';

// <span-list
//   class="col col-12 col-lg-12"
//   :each-class="'rounded-pill my-1 me-2'"
//   :annotations="example.annotations"
//   :tokens="example?.material?.tokenList"
//   :show-sub="false"
//   :show-index="false"
//   :show-title-detail="false"
//   :can-close="false"
//   :wrap="true"
//   @close="(annot)=>{win.console.log(annot)}"
// ></span-list>

export default {
  props: ["eachClass", "tokens", "annotations", "showSub", "showIndex", "showTitleDetail", "canClose", "wrap"],
  emits: ["close"],
  component: {
    BsBadge,
  },
  setup(props, ctx) {

    const idxesToText = (idxes)=>{
      if (!props.tokens?.length) {
        return JSON.stringify(idxes);
      };
      return idxes.map(idx => props.tokens[idx]?.to?.word ?? props.tokens[idx]?.word ?? `[字符${idx}]`).join("");
    };

    const makeChildren = (annot) => {

      const displayDesc = (annot)=>{
        return ([
          ( annot.desc ? h("span", { class: "mx-1", title: `${annot.label}` }, [`${annot.desc}`]) :
            annot.label ? h("span", { class: "mx-1" }, [`${annot.label}`]) :
            null),
        ]);
      };

      const displayIdxArray = (annot)=>{
        return ([
          ...(annot.tokenarrays ? annot.tokenarrays.map(
            idxes => h("span", { class: "mx-1" }, ["“", idxesToText(idxes), "”"])
          ) : annot.ons ? annot.ons.map(
            idxes => h("span", { class: "mx-1" }, ["“", idxesToText(idxes), "”"])
          ) : []),
        ]);
      };

      const displayWithText = (annot)=>{
        return ([
          (annot.withText ? h("span", { class: "mx-1" }, [annot.withText]) : null),
        ]);
      };

      const displayDefault = (annot)=>{
        return ([
          ...displayIdxArray(annot),
          ...displayDesc(annot),
          ...displayWithText(annot),
        ]);
      };

      const displayMultiSpans = (annot)=>{
        return ([
          ...displayIdxArray(annot),
          ...displayDesc(annot),
          ...displayWithText(annot),
        ]);
      };

      const displayComment = (annot)=>{
        return ([
          (annot.on ? h("span", { class: "mx-1" }, ["“", idxesToText(annot.on), "”"]) : null),
          ...displayDesc(annot),
          ...displayWithText(annot),
        ]);
      };

      const childrenToSolve = (annot)=>{
        return annot.toSolve!=null ? [
          "以解决", h("span", { class: "mx-1" }, [
            "【", makeChildren(props.annotations[annot.toSolve]), "】",
          ]), "的问题",
        ] : [];
      };

      const displayAdd = (annot)=>{
        return ([
          "将", h("span", { class: "mx-1" }, ["“", idxesToText(annot.on), "”"]),
          "增改为", h("span", { class: "mx-1" }, [
            "“", 
            `${annot.side}`=='0' ? annot.target : null,
            idxesToText(annot.on),
            `${annot.side}`=='1' ? annot.target : null,
            "”",
          ]),
          ...childrenToSolve(annot),
        ]);
      };

      const displayModify = (annot)=>{
        return ([
          "将", h("span", { class: "mx-1" }, ["“", idxesToText(annot.on), "”"]),
          "改为", h("span", { class: "mx-1" }, ["“", annot.target, "”"]),
          ...childrenToSolve(annot),
        ]);
      };

      const displayDelete = (annot)=>{
        return ([
          "删除", h("s", { class: "mx-1" }, ["“", idxesToText(annot.on), "”"]),
          ...childrenToSolve(annot),
        ]);
      };

      const displayXx = (annot)=>{};

      const displayFnDict = {
        'selectValue': displayDesc,
        'multiSpans': displayMultiSpans,
        'choose': displayComment,
        'text': displayComment,
        'add': displayAdd,
        'modify': displayModify,
        'delete': displayDelete,
      };

      const happy = ((annot.mode in displayFnDict) ? displayFnDict[annot.mode](annot) : displayDefault(annot));

      return h("span", { }, [
        ((props.showIndex && annot.idx!=null) ? h("span", { class: "mx-1 text-muted" }, [`${annot.idx}`]) : null),
        ...happy,
      ]);
    };

    return () => h("div", { },
      (props.annotations?.map?.(
        annot=>[
          h(BsBadge, {
            class: props.eachClass,
            key: annot.idx,
            title: props.showTitleDetail ? JSON.stringify(annot) : null,
            'data-mode': annot.mode,
            'data-label': annot.label,
            canClose: props.canClose,
            onClose: props.canClose ? (()=>{
              ctx.emit("close", annot);
            }) : (()=>{}),
          }, makeChildren(annot)),
          props.wrap ? h("br") : null,
        ] ?? []).flat()
      )
    );

  },
};





// <!-- 已选列表 开始 -->
// <div class="col col-12 my-1" v-if="currentStep?.props?.listTitle">
//   <div>{{ currentStep?.props?.listTitle }}</div>
// </div>
// <div class="col col-12 my-1" v-if="['multiSpans'].includes(currentStep.mode)">
//   <div class="card">
//     <div class="card-body">
//       <span class="badge rounded-pill bg-light text-dark m-1" v-for="tokenarray in currentStep.props.data.tokenarrays"><span v-for="tokenIdx in tokenarray">{{ getReplacedToken(tokenIdx) }}</span></span>
//     </div>
//   </div>
// </div>
// <div class="col col-12 my-1" v-if="currentStep.props.data.tokenarrays.length<2&&currentStep?.props?.lengthTip">
//   <div>{{ currentStep?.props?.lengthTip }}</div>
// </div>
// <!-- 已选列表 结束 -->







