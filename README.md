# Set Up
##### Set up Environment 
    - Copy `.sample.env` and name it .`env`
    - $ npm i

#### Development
    $ yarn start

#### Test
    $ yarn run test
    $ yarn run test --coverage
    
#### Storybook
    $ yarn run storybook
    
#### Production Bundle
    $ yarn run build
    
# Rendering in CMS

##### 1) Generate the bundle
To access the bundle in CMS first create a production bundle and run the server. If the application is already on stage/qa this step can be ignored.

    $ yarn run build && serve -s build           // Generates the production bundle and starts server at port 5000

##### 2) Add the App Script
Add the script tag to access the js bundle. 


#### 3) Initialize the application

     <script>
        document.addEventListener("DOMContentLoaded", function() {
            window.__SAMPLE_APP_APP_REACT__({                                            
                'cms' : 'cmsName',                                                            // For CMS specific logic
                'cmsEnv' : 'DEV',                                                            // For environment specific logic for the app
                'locale' : 'en_CA',                                                          // For locale specific logic 
                'divId' : 'root',                                                            // Id of the div where the app will be injected
                'cacheBuster': '123345'                                                      // To debug the application in react bundle
            });
        });
     </script>

# Docker Build
    -  $ docker build .
    
- To see the content of docker build go to the build details
- search for `Successfully tagged` and copy the url
    - `$ docker run -it --entrypoint=/bin/sh {url}`
    - `$ ls` to view the content of the docker