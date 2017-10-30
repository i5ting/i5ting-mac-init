#! /bin/bash

# oh my zsh
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# brew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# brew install
brew install git
brew install wget
brew install ack
brew install autojump
brew install tree

echo '[ -f /usr/local/etc/profile.d/autojump.sh ] && . /usr/local/etc/profile.d/autojump.sh' >> ~/.zshrc
source ~/.zshrc

# vim
curl -L https://bit.ly/janus-bootstrap | bash

# prepare folders
mkdir -p ~/workspace/github

# node version manager
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash

echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm' >> ~/.zshrc
source ~/.zshrc

nvm install 0.10
nvm install 4
nvm install 6
nvm install 8

npm install --global yrm --registry=https://registry.npm.taobao.org

yrm use cnpm
npm i -g yarn

# https://github.com/i5ting/i5ting-mac-init/issues/1 
# ~/.oh-my-zsh/plugins/git/git.plugin.zsh 和lazycommit效果一样，故而弃用
# npm i -g lazycommit
npm i -g lazyclone

 # ssh-keygen 
ssh-keygen 
cat ~/.ssh/id_rsa.pub
echo 'save it to gitlab or https://github.com/settings/keys'
