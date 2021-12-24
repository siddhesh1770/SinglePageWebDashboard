const goPermission = () => {
  const state = localStorage.getItem("userState");
  //   console.log(state);

  if (state === "true") {
    return true;
  } else {
    return false;
  }
};

export { goPermission };
