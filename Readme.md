


    Buenas queria describir el proyecto realizado:

        MOdulos añadidos:
            1.Cors para evitar que me de problemas con las conexiones externas y poder consumir la url proporcionada
            2.dotenv, por lo que entendi es el modulo que permite centralizar y crear las variables del proyecto en un mismo archivo de esta forma tenerlo mejor contraldo.
            3.express es el modulo que genero el proyecto basico de node.
            4. express-validator, es el modulo que he importado para poder llevar a cabo de validaciones antes de insertar los datos a la vase de datos
            5.mongoose, es el modulo que fue importado y que sirve como conector con la mongoDB atlas,y ademas es el ORM sobre el mongo, con lo que me permite utilizar ya metodos creados a la hora de interactuar con la base de datos.
            6.mongoose-sequencing, modulo que fue implementado para poder sustiuir el id generado por mongo por un id de tipo integer(number) tal como inidicaba la documentacion de swagger
        Estructura de proyecto:
            Se ha utilizado el patron de Modelo-Vista-Controlador, de esta forma se separa diferentes funcionalidades y asi sera mas facil de mantener la aplicacion y trabajar con ella en general!
                estructura:
                    1.config: el directorio, que contiene el modelo tecnico con una colleccion intermediaria de mongo donde relaciona objet con el id numerico
                    2.controllers direcotrio donde se almacenan toda la logica de la aplicaicon y su funcionamiento, no estan acabados
                    3.middleware. directorio donde succcede la validacion de la data antes de ser insertada en una colleccion.
                    4.models. directorio que contiene schemas de creacion de collecciones en el mongodb
                    5.public. directorio, que deberia contener las vistas pero no las tengo 
                    6.routes. directorio que contiene rutas URL que sirven para activar funciones del controlador.
                    7..env variables del proyecto.
                    8.app.js archivo donde comienza la aplicacion
                    9.swagger-ui-express . modulo necesario para consumir la documentacion de swagger
        Estado del proyecto:
            el proyecto se encuentra inacabado, consegui insertar tanto direcciones como usuarios por separado , pero debido al desconocimiento de las tecnologias utilizadas no supe adatarlas a requisitos tecnicos del proyecto. 

            el bloqueante actual, es id de relacion entre adress y el usuario, ya que segun documentacion de swagguer se trataba de dos objetos inpendeientes(user,adress) relacionados por un id. 

            Por desconocimiento de la caracteristicas tecnicas de MongoDB, y por requisitos tecnicos id debe ser de tipo integer , se ha sustituido el id de User  y de Adress por un id de tipo integer autoincrementado con el punto de partida en 1. la casusitica consiste:
                     1. solo consegui crear alias de id original de mongo para una entidad o User o Adress.
                     2. para poder formar una relacion entre dos objetos se necesita una cadena de tipo string unica de minimo 12 digitos, y el alias elegido no cumplia dichos requisitos del mongo 

            Cabe lugar destacar, que la logica de insertar un usuario con relacion con su direccion se ha optado a insertar en la colleccion primero la direccion , y para formar relacion User-adress a lahora de insertar al usuario recuperar el ultimo objeto Adress insertado y coger su id. Pero nunca se ha probado 

            Faltan las vistas de la aplicacion, probar la logica de insertar los dos objetos en 
            collecciones diferentes.

            De buenas noticias consumi la documentacion de swagger en la aplicacion.

            Solo debo añadir yo nunca trabaje ni con node.js ni con mongoDB he sacado muchissimas conclusiones de esta tarea y mi propio desarrollo profesional y sobre todo valiosa experiencia en dichas tecnologias.

            Un saludo.Igor
             