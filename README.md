# WARNING

This project is still in early development! Don't use this on line environements
                                                                                                    
                                                 `,;;;';:`                                          
                                             .'+''+'''''''''.                                       
                                          .''''++''+''''+''''':                                     
                                        :++''++''''+''+'''''''';                                    
                                      :++'++''+'''+''''''''+'''+;                                   
                                    `++++++'++'+''+''''+'+'+'''+'                                   
                                   '++++'++''++''''''+'''+'''+'+;,                                  
                                  +++++'++'''++''+'''+'''''''+'';;                                  
                                .++''++''++'++'+''''+'''+'''+'''''                                  
                               ,+++'++'++''+++''+'+'''+'''+''''+';                                  
                              ,'++++++''+''++'+'''+'''+'''+'''+';'                                  
                             ,'++''++''+''+''++''+'''+''''''+'''',                                  
                            .'++''++'++'++''++'++''++''+''''';++;`                                  
                           `+'++'++'++'++''++'++''+''++''+''''';; ':                                
                           +'++'+''++''+''+''++'++''+''''';+';''.,;';;                              
                          ''++'++'++'++'++'++''+''++''+''''';'+; ';;;';.                            
                         ;'++'++'+''+''+''++'++''+'''+''+''+''':`''';';;;                           
                         '+''+''+''+'++''+''+''++''+''+'''+';+' ';'';';';;                          
                        '+'++'++'++'++'++'++''+'++''++;'+''+';.`';';;;;';;;                         
                        ''++'+''+'++'++''+''++'++'++''+';++;':`';'';';;';'';                        
                       ,'+'++'++'++'++'++'++'++''+''+''+''++;`,';;;;'''';;;;'                       
                       '+'++'+'++'++'++'++''#''+''++''+;'+';``';'';';;'';';;;;                      
                       ''+'++'#+'+'++''#'++''++'+''++'++'++,`'';';;'';';;';;;:;                     
                       +''+'++'++'++'#''+''#''++'++''+''+':`:';.`` `;;'';;;;';;:                    
                       '++'+''+'++'++'#''++'+';#';#+;++;'+.:';,.```  ;;;;';;;;;'                    
                       :'+''+''+'++'++'#''#''++'++''+''+:,,'':,.```   ';';;;';;;;                   
                       .:::;++''+'++'++'++'#';#';#';++;;.,'';:,,.```  `;'';;;;;':`                  
                        ::,,:::,++'++'#''+'++''+''++'',,:;'''::,..```  '';;'':;;;;                  
                        `,,,:,,,,,,;+''+''#''#''#';#;,,;''++;::,,..``` ;'';';;''::                  
                         :,:,,,,,,,.,+'++'++'++'++;;,:'+++++::::,,..```'';;'';;;;;.                 
                         `:,,,,,,,.`,,,,;+'++;++;;;:;#######:::::,,..``;;;;';:;'::;                 
                          ,,,,,,,`.,,,,,,,,:+;;';;'#######@@;:::::,,..:;';;;;;;;;;'                 
                         ,,,,,,,``.,,,,,,,,:;;;'########@@@@@::::::,,,;';:;';:;';;;                 
                        .,,,,,,...,,,,:'''';'#@########@@@@@@@::::::;;';;;';:;';:::                 
                        ,,,,,,...,,#''''#@@#@@#########@@@@@@@@@#+++;;;';;;;;;;;;;.                 
                       ,,,,,,...,:;+`   .@##@#####++####@@@@@@@@##+';;'':;''::;'::                  
                      ,,,,,,,..,:;+      ########+++#####@@@@@##++':;'':;''::;';;:                  
                     .,,,,,,`.,,::        ######+++++++#######+++';;;';;;;;;;;;;:`                  
                     ,,,,,,..,,:,,        '+++#+'+++'++#+++#+''+';;;';;;;;';::..`                   
                    ,,,,,,...,:,,          ++++''++''+++''++'''';';;;;'::;',.`..`                   
                   ,,,,,,...,.,,           `+'''++'''++''++';'';;';;;';;:.....``                    
                  .:,,,,,..,.,.             :'''+''''+';'+';;'';';;;':..`..````                     
                 `:,,,,,..,.:,               :''''''+';'+';;'';'';;..`...`.`.``                     
                 ,,::,,..,,:,`                :''''+'';'+;;;'';';+........````                      
                ,,:,,,...,,..                  `';'''';+';;'';',.''.......```                       
               ,,:::,,..,.,.                     ;';';+';;;+:....,#;...,...``                       
              ,,:::,,..,.:.                       `;''+;;;.......,+';,.....``                       
             ,,,:,,,...,:.`                         `:;;,.........:#;;,.`.`.`                       
            :,,:::,,.,,...                              .;'+'+';,.,+';.......`                      
           :,,:::,,.,,.:.                                      `'';:#;;.,,,`.`                      
          :,,::::,,.,,,..                                         .'''';,.`...`                     
          :::,::,:.,,.,.                                            '+;'....`..                     
           ;,:,:,..,.,.`                                             '+;;..`.`.`                    
            ';,,,..,,,,                                               ';':...``.`                   
             ,''',,.,.                                                :';;,...`..                   
              `+;;,,..                                                 '';'...`..`                  
                ,';,.                                                   ;;;,.````.`                 
                   ,`                                                   ;';'...`.``                 
                                                                         '';:...````                
                                                                         .;;;...```.`               
                                                                          '';:.`.```.`              
                                                                           ';;...```..              
                                                                           :;;:...`.``.             
                                                                            ';;...`.`...            
                                                                            :;;:...`..`..           
                                                                             ';;`.....``.`          
                                                                             :;;,...``....`         
                                                                              ';'......`...         
                                                                              ,;;,`......:.         
                                                                               ';;.....::`          
                                                                               ,;;,,,::,            
                                                                                ';';::              
                                                                                :;;:                
                                                                                 ,    

# Table of contents

* [Install](#install)                                                                              
* [Routing](#routing)                                                                              
* [Templating](#templating)                                                                              
* [Helpers](#helpers)                                                                              
                                                                                 
# Pong / A Facebook Tab Framwork

## Install

Pong is really easy to install. 

1. Clone this project into a folder

        $ git clone git@github.com:contentcowboys/Pong.git Folder-name

2. Run composer to install dependencies

        $ composer install

3. Configure settings in the cofig files, located in the 'app/config/' folder

## Routing

Pong uses the Slim framework for it's routing. Documentation can be found here:
[http://docs.slimframework.com/#Routing-Overview](http://docs.slimframework.com/#Routing-Overview)

### Page routing

Page routing goes into 'app/routes/views.php'

You can add your own routes like this:

```php
$app->router->get('/example/', function() use ($app) 
{
  // do something here
});
```

The '/example/' after '$app->router->get' is the URI that you would want to use, you can change this in anything you want, you can even add multilayered URi's, for example '/lorem/ipsum/do'

### Parameters

This example shows how to add parameters to your route:

```php
$app->router->get('/example/:one:two', function($one, $two) use ($app) 
{
  echo "The first paramter is " . $one;
  echo "The second parameter is " . $two;
});

### HTTP Methods

You can set the HTTP method by changing the router method like so:

```php
// POST route
$app->router->post('/user/', function() use ($app) 
{
  // add a new user
});

// PUT route
$app->router->put('/user/:id', function($id) use ($app) 
{
  // update user
});

// DELETE route
$app->router->delete('/user/:id', function($id) use ($app) 
{
  // update user
});
```

## Templating

Pong uses Twig as its template parses, it's documentation can be found here:
[http://twig.sensiolabs.org/documentation](http://twig.sensiolabs.org/documentation)

To show an page you can use our rendering engine. It is called by using the '$app->render()' method. 

This method accepts two parameters
the first one is what view you want to use, this can ba a native html or twig. you dont have to add the extension (.html)

```php
$app->render('example.template');
```

The second parameter is the data you want to pass to the view
Default this is $app->data, this variable contains some handy default variables

```php
$app->render('example.template', $app->data);
```

To add your own to this variable use the following syntax:

```php
$app->data['key'] = "value";
```

### HTML5 Boilerplate

There is a default template that uses HTML5 Boilerplate as a base and can be found at 'app/view/templates/master.boilerplate.html'

More detailed information how to use this template can be found in the example view as it includes comments for each action needed to use the master template 

## Helpers

### URL helper

Url generation.

#### assets

Generate url for an asset.

```php
echo URL::asset('css/somefile.css');
```

It also has an correspondig Twig function

```html
<link rel="stylesheet" href="{{ asset('css/somefile.css') }}" />
```


## possible additions / tweaks

* https://github.com/c9s/Pux
