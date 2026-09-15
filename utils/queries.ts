// This File contains pre defined queries for whole app (don't remove anything from here)

export const queryParam = (value: string | string[] | undefined) =>
  Array.isArray(value) ? (value[0] ?? "") : (value ?? "");

// all posts query
export const allPostsQuery = () => {
  const query = `*[_type == "post"] | order(_createdAt desc){
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
      postedBy->{
        _id,
        userName,
        image
      },
    likes,
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`;

  return query;
};

// post detail query
export const postDetailQuery = (postId: string | string[] | undefined) => {
  const query = `*[_type == "post" && _id == '${queryParam(postId)}']{
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
     likes,
    comments[]{
      comment,
      _key,
      postedBy->{
        _ref,
      _id,
    },
    }
  }`;
  return query;
};

// search post query
export const searchPostsQuery = (searchTerm: string | string[] | undefined) => {
  const query = `*[_type == "post" && caption match '${queryParam(searchTerm)}*' || topic match '${queryParam(searchTerm)}*'] {
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
likes,
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`;
  return query;
};

// single user query
export const singleUserQuery = (userId: string | string[] | undefined) => {
  const query = `*[_type == "user" && _id == '${queryParam(userId)}']`;

  return query;
};

// all users query
export const allUsersQuery = () => {
  const query = `*[_type == "user"]`;

  return query;
};

// user created posts query
export const userCreatedPostsQuery = (userId: string | string[] | undefined) => {
  const query = `*[ _type == 'post' && userId == '${queryParam(userId)}'] | order(_createdAt desc){
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
 likes,

    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`;

  return query;
};

// user liked posts query
export const userLikedPostsQuery = (userId: string | string[] | undefined) => {
  const query = `*[_type == 'post' && '${queryParam(userId)}' in likes[]._ref ] | order(_createdAt desc) {
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
 likes,

    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`;

  return query;
};

// topic posts query
export const topicPostsQuery = (topic: string | string[] | undefined) => {
  const query = `*[_type == "post" && topic match '${queryParam(topic)}*'] {
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
 likes,

    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`;

  return query;
};
