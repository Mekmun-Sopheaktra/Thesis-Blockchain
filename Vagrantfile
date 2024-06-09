Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/bionic64"

  config.vm.define "vm1" do |vm1|
    vm1.vm.network "forwarded_port", guest: 80, host: 8081
    vm1.vm.network "forwarded_port", guest: 80, host: 8081, host_ip: "127.0.0.1"
    vm1.vm.synced_folder "E:/hlf-docker-swarm", "/vagrant_data"

    vm1.vm.provision "shell", inline: <<-SCRIPT
      echo "cd /vagrant" >> /home/vagrant/.profile
      echo "cd /vagrant" >> /home/vagrant/.bashrc
      echo "All good!!"
    SCRIPT
  end

  config.vm.define "vm2" do |vm2|
    vm2.vm.network "forwarded_port", guest: 80, host: 8082
    vm2.vm.network "forwarded_port", guest: 80, host: 8082, host_ip: "127.0.0.1"
    vm2.vm.synced_folder "E:/hlf-docker-swarm", "/vagrant_data"

    vm2.vm.provision "shell", inline: <<-SCRIPT
      echo "cd /vagrant" >> /home/vagrant/.profile
      echo "cd /vagrant" >> /home/vagrant/.bashrc
      echo "All good!!"
    SCRIPT
  end

  config.vm.define "vm3" do |vm3|
    vm3.vm.network "forwarded_port", guest: 80, host: 8083
    vm3.vm.network "forwarded_port", guest: 80, host: 8083, host_ip: "127.0.0.1"
    vm3.vm.synced_folder "E:/hlf-docker-swarm", "/vagrant_data"

    vm3.vm.provision "shell", inline: <<-SCRIPT
      echo "cd /vagrant" >> /home/vagrant/.profile
      echo "cd /vagrant" >> /home/vagrant/.bashrc
      echo "All good!!"
    SCRIPT
  end
end
