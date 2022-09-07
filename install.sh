#! /bin/bash

# oh my zsh
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
chsh -s /bin/zsh

# brew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"

# brew install
brew install git
brew install wget
brew install ack
brew install autojump
brew install tree

git config --global user.name  'i5ting'
git config --global user.email 'i5ting@126.com'

echo '[ -f /usr/local/etc/profile.d/autojump.sh ] && . /usr/local/etc/profile.d/autojump.sh' >> ~/.zshrc
source ~/.zshrc

# vim
curl -L https://bit.ly/janus-bootstrap | bash

# prepare folders
mkdir -p ~/workspace/github

# node version manager
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash

nvm install stable
nvm alias default node 

npm install --global yrm --registry=https://registry.npm.taobao.org

yrm use cnpm
npm i -g yarn

# https://github.com/i5ting/i5ting-mac-init/issues/1 
# ~/.oh-my-zsh/plugins/git/git.plugin.zsh 和lazycommit效果一样，故而弃用
npm i -g lazycommit
npm i -g lazyclone

 # ssh-keygen 
ssh-keygen 
cat ~/.ssh/id_rsa.pub
echo 'save it to gitlab or https://github.com/settings/keys'

# move vscode keybindings
cp -f keybindings.json ~/Library/Application\ Support/Code/User