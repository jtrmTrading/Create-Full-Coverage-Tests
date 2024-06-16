# Create-Full-Coverage-Tests
Tareas de vottun

Para crear pruebas de cobertura total para el contrato PrivateBank utilizando el framework Truffle, primero necesitamos configurar el entorno de desarrollo con Truffle y escribir los tests correspondientes en JavaScript.

1. Configuración del Proyecto Truffle
   
Instalación de Truffle y Ganache
Si no tenemos Truffle y Ganache instalados, primero necesitamos instalarlos globalmente usando npm:

    npm install -g truffle
    npm install -g ganache-cli

Inicialización del Proyecto Truffle

    mkdir PrivateBank
    cd PrivateBank
    truffle init

3. Escritura del Contrato Solidity
Guarda tu contrato Solidity en contracts/PrivateBank.sol

4. Migración del Contrato
Crea el archivo de migración en migrations/2_deploy_contracts.js:

    const PrivateBank = artifacts.require("PrivateBank");
    module.exports = function (deployer) {
      deployer.deploy(PrivateBank);
    };
    

4. Pruebas de Cobertura Total
Crea el archivo de pruebas en test/privateBank.test.js

5. Ejecución de las Pruebas
Ejecuta Ganache CLI en una terminal separada:
	  ganache-cli

Luego, en la terminal del proyecto, compila y ejecuta las pruebas:

    truffle compile
    truffle migrate
    truffle test

Estos pasos configuran el proyecto e implementan el contrato, y ejecutan pruebas de cobertura total para asegurar que todas las funciones del contrato PrivateBank se comportan como se espera.
