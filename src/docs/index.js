// import users from "../docs/users/index.js";
import responses from "./reponse.js";

const config = {
  swagger: '2.0',
  info: {
    version: '1.0.0.',
    title: 'Portfolio APIs documentation',
    description: 'This is myBrand documentation',
  },
  
  schemes: ['http', 'https'],
  securityDefinitions: {
    JWT  : {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  tags: [
    {
      name: 'portfolio APIS documentation',
    },
  ],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths:{
    "/": {
        "get": {
            "tags": ["home"],
            "summary": "Default message on server",
            "operationId": "",
            "requestBody": {
            "description": "default router should return message",
            "content": {
                "application/json": {
                "schema": {}
                },
                "application/xml": {
                "schema": {}
                }
            },
            "required": false
            },
            "responses": {
            "200": {
                "description": "Message of successful request",
                "content": {}
            }
            },
            "x-codegen-request-body-name": "body"
        }
    },
    "/api/add-users":{
      "post": {
        "tags": ["User"],
        "summary": "creating new user",
          parameters: [
            {
              name: 'body',
              in: 'body',
              description: 'creating new user',
              required: true,
              example:{
                names: "Fabrice ",
                email: "aimefabrice@gmail.com",
                password: "fabrice123" 
            }
            },
    
          ],
        "requestBody": {
        "description": "thie endpoint should create new user",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },
    "/api/login":{
      "post": {
        "tags": ["User"],
        "summary": "Login a user",
          parameters: [
            {
              name: 'body',
              in: 'body',
              description: 'loging in',
              required: true,
              example:{
                "email": "klaraisingizwe@gmail.com",
                "password": "Isingizwe22" 
            }
            },
    
          ],
        "requestBody": {
        "description": "this endpoint should allow user to login",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },
    "/api/profile":{
      "get": {
        "tags": ["User"],
        "summary": "Getting user profile",
        security: [{
          JWT: [],
        }],
        "requestBody": {
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },
    "/api/users":{
      "get": {
        "tags": ["User"],
        "summary": "Getting all user",
        security: [{
          JWT: [],
        }],
        "requestBody": {
        "description": "this endpoint should return all user",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },
    "/api/users/{id}":{
      "get": {
        "tags": ["User"],
        "summary": "get one user",
        security: [{
          JWT: [],
        }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'user\'s id',
            required: true,
          },
  
        ],
        "requestBody": {
        "description": "this endpoint should return one user",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
       responses,
        "x-codegen-request-body-name": "body"
      }
    },
    "/api/del-user/{id}":{
      "delete": {
        "tags": ["User"],
        "summary": "delete a user",
        security: [{
          JWT: [],
        }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'user\'s id',
            required: true,
          },
  
        ],
        "requestBody": {
        "description": "this endpoint should delete a user",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },

    //blogs
    "/api/add-blog":{
      "post": {
        "tags": ["Blog"],
        "summary": "creating new blog",
          security: [{
            JWT: [],
          }],
          parameters: [
            {
              in: 'formData',
              name: 'title',
              required: true,
            },
            {
              in: 'formData',
              name: 'description',
              required: true,
            },
            {
              in: 'formData',
              name: 'content',
              required: true,
            },
            {
              name: 'image',
              in: 'formData',
              required: true,
              type: 'file',
            },
    
          ],
        "requestBody": {
        "description": "thie endpoint should create new user",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },
    "/api/get-blogs":{
      "get": {
        "tags": ["Blog"],
        "summary": "Get all blogs",       
        "requestBody": {
        "description": "this endpoint should return all blog",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },
    "/api/get-blog/{id}":{
      "get": {
        "tags": ["Blog"],
        "summary": "Get single blog",
        security: [{
          JWT: [],
        }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'blog\'s id',
            required: true,
          },
  
        ],
        "requestBody": {
        "description": "this endpoint should return a single blog",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },
    "/api/blog/{id}":{
      "patch": {
        "tags": ["Blog"],
        "summary": "Updating blog",
          security: [{
            JWT: [],
          }],
          parameters: [
            {
            name: 'id',
            in: 'path',
            description: 'blog\'s id',
            required: true,
          },
            {
              name: 'body',
              in: 'body',
              description: 'creating new user',
              required: true,
              example:{
                  "title": "Holla ",
                  "description": "here is our new blog",
                  "content":"my content is as followng",
                  "image": " "
                }
            },
    
          ],
        "requestBody": {
        "description": "this endpoint should update blog",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },
     "/api/del-blog/{id}":{
      "delete": {
         "tags": ["Blog"],
        "summary": "deleting blog",
          security: [{
            JWT: [],
          }],
          parameters: [
            {
            name: 'id',
            in: 'path',
            description: 'blog\'s id',
            required: true,
          },
           
    
          ],
        "requestBody": {
        "description": "this endpoint should update blog",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },
    "/api/blog/{id}/comments":{
      "get": {
        "tags": ["Blog"],
        "summary": "getting blog's comments",
          security: [{
            JWT: [],
          }],
          parameters: [
            {
            name: 'id',
            in: 'path',
            description: 'blog\'s id',
            required: true,
          },
           
    
          ],
        "requestBody": {
        "description": "this endpoint should display all comments of the blog",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },
    "/api/blog/{id}/likes":{
      "get": {
        "tags": ["Blog"],
        "summary": "getting blog's likes",
          security: [{
            JWT: [],
          }],
          parameters: [
            {
            name: 'id',
            in: 'path',
            description: 'blog\'s id',
            required: true,
          },
           
    
          ],
        "requestBody": {
        "description": "this endpoint returns likes of blog blog",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },

     //comment and likes

    "/api/comment":{
      "post": {
        "tags": ["Comment"],
        "summary": "Create comment",
          security: [{
            JWT: [],
          }],
          parameters: [
            {
              name: 'body',
              in: 'body',
              description: 'creating comment',
              required: true,
              example:{
                "names": "penine",
                "email":"penina@gmail.com",
                "comment":"my comment",
                "blogId" : "63b97280f7723546cfd22a42" 
            }
            },
    
          ],
        "requestBody": {
        "description": "this endpoint should update blog",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },
    "/api/comments":{
      "get": {
         "tags": ["Comment"],
        "summary": "getting all comment",
        "requestBody": {
        "description": "this endpoint should update blog",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
       responses,
        "x-codegen-request-body-name": "body"
      }
    },
    "/api/comment/{id}":{
      "get": {
         "tags": ["Comment"],
        "summary": "getting single comment",
          
          parameters: [
            {
            name: 'id',
            in: 'path',
            description: 'comment\'s id',
            required: true,
          },
           
    
          ],
        "requestBody": {
        "description": "this endpoint should update blog",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },
    "/api/like":{
      "patch": {
         "tags": ["Likes"],
        "summary": "Liking",
          security: [{
            JWT: [],
          }],
          parameters: [
            {
            name: 'body',
            in: 'body',
            description: 'liking a blog',
            required: true,
            example:{
              "userId":"639c8befcf60453fbceb425b",
              "blogId":"63b97280f7723546cfd22a42"
            }
          },
           
    
          ],
        "requestBody": {
        "description": "this endpoint should update blog",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },
    "/api/unlike":{
      "patch": {
         "tags": ["Likes"],
        "summary": "Unliking",
          security: [{
            JWT: [],
          }],
          parameters: [
            {
            name: 'body',
            in: 'body',
            description: 'liking a blog',
            required: true,
            example:{
              "userId":"639c8befcf60453fbceb425b",
              "blogId":"63b97280f7723546cfd22a42"
            }
          },
           
    
          ],
        "requestBody": {
        "description": "this endpoint should update blog",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },

    //messages


    "/api/message":{
      "post": {
        "tags": ["User Messages"],
        "summary": "creating message",
          parameters: [
            {
              name: 'body',
              in: 'body',
              description: 'creating message',
              required: true,
              example:{
                "email": "clara@gmail.com",
                "names": "Klara Isingizwe",
                "message": "Hello developer, we want to hire you"
            }
            },
    
          ],
        "requestBody": {
        "description": "thie endpoint should create new user",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },
    "/api/messages":{
      "get": {
        "tags": ["User Messages"],
        "summary": "Getting all user messages",
        security: [{
          JWT: [],
        }],
        "requestBody": {
        "description": "this endpoint should return all user messages",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
       responses,
        "x-codegen-request-body-name": "body"
      }
    },
    "/api/message/{id}":{
      "get": {
        "tags": ["User Messages"],
        "summary": "get one user message",
        security: [{
          JWT: [],
        }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'message\'s id',
            required: true,
          },
  
        ],
        "requestBody": {
        "description": "this endpoint should return one user",
        "content": {
            "application/json": {
            "schema": {}
            },
            "application/xml": {
            "schema": {}
            }
        },
        "required": false
        },
        responses,
        "x-codegen-request-body-name": "body"
      }
    },
    



  },
}
export default config;