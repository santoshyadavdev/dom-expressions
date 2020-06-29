const template1 = <div>{simple}</div>;

const template2 = <div>{state.dynamic}</div>;

const template3 = <div>{simple ? good : bad}</div>;

const template4 = <div>{simple ? good() : bad}</div>

const template5 = <div>{state.dynamic ? good() : bad}</div>;

const template6 = <div>{state.dynamic && good()}</div>;

const template7 = (
  <div>{state.count > 5 ? (state.dynamic ? best : good()) : bad}</div>
);

const template8 = <div>{state.dynamic && state.something && good()}</div>;

const template9 = <div>{(state.dynamic && good()) || bad}</div>;

const template10 = (
  <div>{state.a ? "a" : state.b ? "b" : state.c ? "c" : "fallback"}</div>
);

const template11 = (
  <div>{state.a ? a() : state.b ? b() : state.c ? "c" : "fallback"}</div>
);

const template12 = <Comp render={state.dynamic ? good() : bad} />;

// no dynamic predicate
const template13 = <Comp render={state.dynamic ? good : bad} />;

const template14 = <Comp render={state.dynamic && good()} />;

// no dynamic predicate
const template15 = <Comp render={state.dynamic && good} />;

const template16 = <Comp render={state.dynamic || good()} />;
