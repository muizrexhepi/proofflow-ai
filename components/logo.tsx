export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
      >
        <path
          d="M14 2L2 8V14C2 20.5 6.5 25.5 14 26C21.5 25.5 26 20.5 26 14V8L14 2Z"
          fill="white"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M14 8V20M14 8L8 11V17C8 19.5 10.5 21.5 14 22M14 8L20 11V17C20 19.5 17.5 21.5 14 22"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xl font-semibold">Casevia</span>
    </div>
  );
}
