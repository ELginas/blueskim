export const contextMenu = (node, fn) => {
  const handleContextMenu = (e) => {
    fn(e.clientX, e.clientY);
    e.preventDefault();
  };

  node.addEventListener("contextmenu", handleContextMenu);
  return () => {
    node.removeEventListener("contextmenu", handleContextMenu);
  };
};
