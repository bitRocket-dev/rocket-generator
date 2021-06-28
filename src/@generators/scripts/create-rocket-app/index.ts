/** @format */

import { mkdirs, copy, writeFile } from 'fs-extra';
import { createPackageJSON } from './templates/createPackageJSON';
import { execAsync } from '../../utilities';
import boxen = require('boxen');

export const createRocketApp = async (name: string) => {
  const dir = `./${name}`;
  await mkdirs(dir);
  const localDir = `${__dirname}/boilerplate`;

  await copy(localDir, dir);

  writeFile(`${dir}/package.json`, createPackageJSON(name));

  console.log(`\n\x1b[33m`, `\x1b[5m`, 'WAITING... INSTALLING PACKAGE...', '\x1b[0m');

  await execAsync(`npm install`, { cwd: dir });

  console.log(
    `\n\n\x1b[31m%s\x1b[0m`,

    `    ##################################################
    ##################################################
    ##############################(#(/          /#####
    ############################,                #####
    ########################(.                   #####
    #############*     (##(                     *#####
    #########/       (##(                      .######
    #######,       (##(                        #######
    #####(       (##(                        *########
    ####(      (##(                        .##########
    ####     (###############            /############
    ###(   /#################         /###############
    #### /##################/      (###(  ############
    (#######################,  .(###*    (############
    ########################,####*      /#############
    ##########################.        ###############
    #######################.        .#################
    ###################(         ,####################
    ###############(#((////(##########################
    ##################################################\n\n`,
  );

  console.log(
    `\n\x1b[36m%s\x1b[0m`,
    boxen(
      `Now start coding by typing:\n\n  cd ${name}\n\nAfter if you want create or import other components:\n\n  npx rocket-generator`,
      {
        padding: 1,
        margin: 1,
        borderStyle: 'doubleSingle',
      },
    ),
  );

  console.log(`\x1b[32m`, 'DONE! GOOD CODING!');
};
