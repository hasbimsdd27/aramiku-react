export const Pagination = (firstpage, lastpage, show, currentpage) => {
  const totalpage = lastpage - firstpage;
  let pagination = [];
  console.log(currentpage < lastpage - show + 1);
  if (totalpage >= 10) {
    if (currentpage < firstpage + show - 1) {
      for (let i = firstpage; i <= firstpage + show - 1; i++) {
        pagination.push(i);
      }
      pagination.push("...");
      pagination.push(lastpage);
      return pagination;
    }
    if (
      firstpage + show - 1 <= currentpage &&
      currentpage < lastpage - show + 1
    ) {
      pagination.push(firstpage);
      if (currentpage - 2 !== firstpage) {
        pagination.push("...");
      }
      for (let i = currentpage - 1; i <= currentpage + 1; i++) {
        pagination.push(i);
      }
      pagination.push("...");
      pagination.push(lastpage);
      return pagination;
    }
    if (currentpage >= lastpage - show + 1) {
      pagination.push(firstpage);
      pagination.push("...");
      for (let i = lastpage - show + 1; i <= lastpage; i++) {
        pagination.push(i);
      }
      return pagination;
    }
  } else {
    for (let k = 1; k <= lastpage; k++) {
      pagination.push(k);
    }
    return pagination;
  }
};
