function toggleProject(projectId) {
    var projectInfo = document.getElementById(projectId);
    if (projectInfo.style.display === "none") {
        projectInfo.style.display = "block";
    } else {
        projectInfo.style.display = "none";
    }
}
