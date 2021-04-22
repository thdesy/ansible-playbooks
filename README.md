# Ansible Playbooks

Intended as collection of some of mine playbooks, that could be of interest for others as well (after cleaning up...)

## Topics

### Solaar for Logitech wireless input devices
During COVID-19 I got myself a Logitech MX vertical mouse for my home office (aiming for better ergonomics). Since the support by Logitech for its unifying reciever and bluetooth device features on Linux is not very satisfactory, I had been locking for alternatives and stumbled over [Solaar](https://pwr-solaar.github.io/Solaar/)

Since no prebuild packages are around for my Fedora (33 as of writing), I wrote a playbook (all local on my noptebook) to pull the Solaar repo to /var/spool/ansible/Solaar and install it from there

```
ansible-playbook Solaar.pb/Logitech_solaar.yaml
```

### Virtual Box with signing akmod kernel extensions for UEFI
Installing on Fedora VirtualBox including the extension pack for USB3 support (beware, that the licences by Oracle for Virtual Box and especially for the extension pack are precarious and probably only usable for a strict private use)

```
ansible-playbook VirtualBox/virtualbox.yaml
```

Since I boot my computer through a UEFI (BIOS), I need to sign the akmod kernel extensions, that VirtualBox is (hopefully) building for each new kernel. To do so, an ad hoc CA certificat/key is created.

```
ansible-playbook VirtualBox/virtualbox_kernelextensions.yaml
```

With the first run, you will probably need to register the cert manually by running as root/sudo/wheel
 ```
  /usr/bin/mokutil --import  /etc/kernel.sign.d/public_key.der
 ```
where you will be asked for a password (no idea how to automatize that properly...).
During the next reboot, you should be asked enroll the certificate with the enetred password into the approved keys in UEFI. Afterwards, the kernel extensions should be accepted.
  
