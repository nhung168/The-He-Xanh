function initializeViz() {
  var placeholderDiv = document.getElementById("tableauViz");
  var url = "https://public.tableau.com/shared/YSTZSKXXD?:display_count=yes";
  var options = {
    width: placeholderDiv.offsetWidth,
    height: placeholderDiv.offsetHeight,
    hideTabs: true,
    hideToolbar: true,
    onFirstInteractive: function () {
      workbook = viz.getWorkbook();
      activeSheet = workbook.getActiveSheet();
    }
  };
  viz = new tableau.Viz(placeholderDiv, url, options);
}      
