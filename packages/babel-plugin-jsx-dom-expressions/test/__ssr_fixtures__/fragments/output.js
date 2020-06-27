import { createComponent as _$createComponent } from "r-dom";
import { ssr as _$ssr } from "r-dom";
import { escape as _$escape } from "r-dom";
const multiStatic = ["<div>First</div>", "<div>Last</div>"];
const multiExpression = ["<div>First</div>", inserted, "<div>Last</div>", "After"];
const multiDynamic = [
  _$ssr(['<div id="', '">First</div>'], () => _$escape(state.first, true)),
  () => state.inserted,
  _$ssr(['<div id="', '">Last</div>'], () => _$escape(state.last, true)),
  "After"
];
const singleExpression = inserted;

const singleDynamic = () => inserted();

const firstStatic = [inserted, "<div></div>"];
const firstDynamic = [() => inserted(), "<div></div>"];
const firstComponent = [_$createComponent(Component, {}), "<div></div>"];
const lastStatic = ["<div></div>", inserted];
const lastDynamic = ["<div></div>", () => inserted()];
const lastComponent = ["<div></div>", _$createComponent(Component, {})];
