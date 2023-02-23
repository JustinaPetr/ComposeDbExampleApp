// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    BasicProfile: {
      id: "kjzl6hvfrbw6c76nndo46m7pf2o0cee7guxnrwpjamamhwirxhfvq9tmwgr2fcu",
      accountRelation: { type: "single" },
    },
    Comments: {
      id: "kjzl6hvfrbw6ca56peq5lf4c3qs2ukbrbeksmaetwx7v9ua0aq95g2xx7ao4wly",
      accountRelation: { type: "list" },
    },
    Posts: {
      id: "kjzl6hvfrbw6c5l6o8bvuhysorkepm371495kb9g0rz0t1fmylhhe5qbz609b9z",
      accountRelation: { type: "list" },
    },
    Comment: {
      id: "kjzl6hvfrbw6c5w1jlas7bjlp4lp1kis7nurlpzf4tppdtwcex9oqhz8fmzttil",
      accountRelation: { type: "list" },
    },
    Following: {
      id: "kjzl6hvfrbw6cb6td5vx9wnji574ie1edxrd3q609rmotkdssw05cfvairsc4t4",
      accountRelation: { type: "list" },
    },
  },
  objects: {
    BasicProfile: {
      name: { type: "string", required: true },
      emoji: { type: "string", required: false },
      gender: { type: "string", required: false },
      username: { type: "string", required: true },
      description: { type: "string", required: false },
      posts: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6c5l6o8bvuhysorkepm371495kb9g0rz0t1fmylhhe5qbz609b9z",
          property: "profileId",
        },
      },
    },
    Comments: {
      body: { type: "string", required: true },
      postId: { type: "streamid", required: true },
      post: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c5l6o8bvuhysorkepm371495kb9g0rz0t1fmylhhe5qbz609b9z",
          property: "postId",
        },
      },
      author: { type: "view", viewType: "documentAccount" },
    },
    Posts: {
      body: { type: "string", required: true },
      test: { type: "string", required: false },
      edited: { type: "datetime", required: false },
      created: { type: "datetime", required: true },
      profileId: { type: "streamid", required: true },
      author: { type: "view", viewType: "documentAccount" },
      profile: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c76nndo46m7pf2o0cee7guxnrwpjamamhwirxhfvq9tmwgr2fcu",
          property: "profileId",
        },
      },
      version: { type: "view", viewType: "documentVersion" },
      comments: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6ca56peq5lf4c3qs2ukbrbeksmaetwx7v9ua0aq95g2xx7ao4wly",
          property: "postId",
        },
      },
    },
    Comment: {
      body: { type: "string", required: true },
      postId: { type: "streamid", required: true },
      post: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c5l6o8bvuhysorkepm371495kb9g0rz0t1fmylhhe5qbz609b9z",
          property: "postId",
        },
      },
    },
    Following: {
      profileId: { type: "streamid", required: true },
      profile: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c76nndo46m7pf2o0cee7guxnrwpjamamhwirxhfvq9tmwgr2fcu",
          property: "profileId",
        },
      },
    },
  },
  enums: {},
  accountData: {
    basicProfile: { type: "node", name: "BasicProfile" },
    commentsList: { type: "connection", name: "Comments" },
    postsList: { type: "connection", name: "Posts" },
    commentList: { type: "connection", name: "Comment" },
    followingList: { type: "connection", name: "Following" },
  },
};
