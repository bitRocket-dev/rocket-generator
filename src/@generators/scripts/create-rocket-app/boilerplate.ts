/** @format */

import fs from 'fs-extra';
import * as boxen from 'boxen';
import { pkg } from './templates/package';
import { execAsync } from '../../utilities';

export const boilerplate = async name => {
  const dir = `./${name}`;
  await fs.mkdirs(dir);
  const localDir = `${__dirname}/boilerplate`;

  await fs.copy(localDir, dir);

  fs.writeFile(`${dir}/package.json`, pkg(name));

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
