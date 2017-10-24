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
echo '[ -f /usr/local/etc/profile.d/autojump.sh ] && . /usr/local/etc/profile.d/autojump.sh' >> ~/.zshrc

# vim
curl -L https://bit.ly/janus-bootstrap | bash


# prepare folders
mkdir -p ~/workspace/github



# ssh-keygen 
ssh-keygen 
cat ~/.ssh/id_rsa.pub
echo 'save it to https://github.com/settings/keys'
