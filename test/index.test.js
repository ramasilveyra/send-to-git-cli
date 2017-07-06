describe('while using send-static-cli', () => {
  let sendToGit = null;
  let sendToGitCLI = null;

  beforeAll(async () => {
    sendToGit = (await import('send-to-git')).default;
    jest.mock('send-to-git');
    sendToGitCLI = (await import('../src/index')).default;
  });

  beforeEach(() => {
    sendToGit.mockReset();
    sendToGit.mockImplementation(() => Promise.resolve());
  });

  afterAll(() => {
    jest.unmock('send-to-git');
  });

  it('should correctly handle required options', () => {
    sendToGitCLI([ '-s', './some-folder', '-d', './public_html', '-r', 'git@github.com:ramasilveyra/send-to-git-cli.git' ]);
    expect(sendToGit.mock.calls.length).toEqual(1);
    expect(sendToGit.mock.calls[0]).toMatchSnapshot();
  });

  it('should log version with "-v" or "--version"', () => {
    /* eslint-disable no-console */
    process.exit = jest.fn();
    console.log = jest.fn();
    sendToGitCLI(['-v']);
    sendToGitCLI(['--version']);
    expect(process.exit.mock.calls.length).toEqual(2);
    expect(console.log.mock.calls.length).toEqual(2);
    expect(console.log.mock.calls[0]).toMatchSnapshot();
    expect(console.log.mock.calls[1]).toMatchSnapshot();
  });
});
