let tableList = JSON.parse(localStorage.getItem("projects"));
let tbody = document.getElementById("tableBody");
console.log(tableList);

function render() {
  let myProject = tableList.map(function (projects, index) {
    return `
            <tr>
                <td>${index + 1}</td>
                <td>${projects.projectName}</td>
                <td>${projects.imgUrl}</td>
                <td>${projects.link}</td>
                <td>${projects.tags}</td>
                <td>
                    <button type="button" class="btn btn-danger">Delete</button>
                    <button type="button" class="btn btn-success">Update</button>
                </td>
            </tr>
        `;
  });

  tbody.innerHTML = myProject.join("");
}

render();

var inputServer = document.getElementById("server").value;
var inputImage = document.getElementById("imageUrl").value;
var inputLink = document.getElementById("link").value;
var inputTags = document.getElementById("tags").value;

function addProject(){
    var newProject = [
        {
            server: inputServer,
            imageUrl: inputImage,
            link: inputLink,
            tags: inputTags,
        },
    ];
    localStorage.setItem("newProject", JSON.stringify(newProject));

}

