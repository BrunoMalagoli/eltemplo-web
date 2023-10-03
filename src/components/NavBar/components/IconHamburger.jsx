
function IconHamburgerMenu(props) {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        height={props.height}
        width={props.width}
        {...props}
      >
        <path
          fill="none"
          stroke="#fafafa"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="M12 21h40M12 33h40M12 45h40"
        />
      </svg>
    );
  }
  
  export default IconHamburgerMenu