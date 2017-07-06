import yargs from 'yargs';
import sendToGit from 'send-to-git';
import pkg from '../package.json';

export default function sendToGitCLI(argv) {
  const parsedArgv = yargs(argv)
    .option('s', {
      alias: 'source',
      demandOption: true,
      describe: 'Glob or array of globs to read',
      type: 'string'
    })
    .option('d', {
      alias: 'destination',
      demandOption: true,
      describe: 'Relative destination path',
      type: 'string'
    })
    .option('r', {
      alias: 'remote',
      demandOption: true,
      describe: 'git repository url',
      type: 'string'
    })
    .option('b', {
      alias: 'branch',
      default: 'master',
      describe: 'Branch to add and push the changes',
      type: 'string'
    })
    .option('cm', {
      alias: 'commit-message',
      default: 'Release',
      describe: 'Commit message for the changes',
      type: 'string'
    })
    .usage(`${pkg.description}.\nUsage: $0 <command> [options]`)
    .version(() => pkg.version)
    .alias('version', 'v')
    .help()
    .alias('help', 'h').argv;

  sendToGit(parsedArgv.s, parsedArgv.d, parsedArgv.r, {
    branch: parsedArgv.b,
    commitMessage: parsedArgv.cm,
  });
}
