//nested time out

const task1 = (callback) => {
  setTimeout(() => {
    console.log("task1 completed");
    callback();
  }, 3000);
};
const task2 = (callback) => {
  setTimeout(() => {
    console.log("task2 completed");
    callback();
  }, 2000);
};
const task3 = (callback) => {
  setTimeout(() => {
    console.log("task3 completed");
    callback();
  }, 1000);
};

//start the first
task1(function () {
  task2(function () {
    task3(function () {
      console.log("task complete");
    });
  });
});

//fetch user data
const userdata = { id: 1, name: "barash" };
const userpost = [
  { id: 101, content: "post1" },
  { id: 102, content: "post2" },
];
const postcomments = {
  101: ["comment1", "comment2"],
  102: ["comment1", "comment2"],
};
const fetchuserdata = (userdata, callback) => {
  console.log("fectching userdata");
  setTimeout(() => {
    callback(userdata);
  }, 1000);
};
const fetchuserpost = (userid, callback) => {
  console.log("fectching userpost");
  setTimeout(() => {
    callback(userpost);
  }, 1000);
};
const fetchuserpostcommnet = (pustid, callback) => {
  console.log("fectching user comment...");
  setTimeout(() => {
    callback(postcomments[pustid] || []);
  }, 1000);
};

fetchuserdata(1, function (userdata) {
  console.log(userdata);
});
