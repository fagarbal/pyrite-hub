db.createCollection("component");

db.component.insert([{
    tag: "example-component",
    description: "This is a example",
    username: "fagarbal",
    views: 100,
    likes: 55
}, {
    tag: "game-component",
    description: "This is a game",
    username: "fagarbal",
    views: 32,
    likes: 12
}, {
    tag: "other-component",
    description: "This is a other",
    username: "fagarbal",
    views: 22,
    likes: 44
}, {
    tag: "table-component",
    description: "This is a table",
    username: "fagarbal",
    views: 12,
    likes: 33
}, {
    tag: "form-component",
    description: "This is a form",
    username: "fagarbal",
    views: 32,
    likes: 87
}, {
    tag: "super-component",
    description: "This is a super",
    username: "fagarbal",
    views: 43,
    likes: 22
}]);