
###### App Info 
    - Component - https://drive.google.com/file/d/1xQcfbplg4P6kjqAkshmmWzFNyFxjae0A/view?usp=sharing
    - Redux - 
    - https://digital-team.quip.com/F2c8A3c2ABaQ/myMomo-Dashboard-Eating
    
# Set Up
##### Set up Environment 
    - Copy `.sample.env` and name it .`env`
    - $ npm config set registry https://npmregistry.domainName.com
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

###### Drupal
    drupal_add_js(http://localhost:5000, array('external' => TRUE));

###### AEM 
    TDB

#### 3) Initialize the application

     <script>
        document.addEventListener("DOMContentLoaded", function() {
            window.__ATM_SAMPLE_APP_APP_REACT_JS__({                                            
                'cms' : 'drupal',                                                            // For CMS specific logic
                'cmsEnv' : 'DEV',                                                            // For environment specific logic for the app
                'locale' : 'en_CA',                                                          // For locale specific logic 
                'divId' : 'root',                                                            // Id of the div where the app will be injected
                'cacheBuster': '123345'                                                      // To debug the application in react bundle
            });
        });
     </script>


# PR
- The PR that is merged to `r/*` will automatically generate a build.
- The build link/status will be in `/commits` page of the repo
- Click on the icon to get the build details

# Docker Build
    -  $ docker build .
    
- To see the content of docker build go to the build details
- search for `Successfully tagged` and copy the url
    - `$ docker run -it --entrypoint=/bin/sh {url}`
    - `$ ls` to view the content of the docker
        
# Artifactory
https://confluence.domainName.com/display/WEB/Docker+Registries+in+Artifactory

