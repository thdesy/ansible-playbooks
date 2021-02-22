# Ansible Playbooks

Intended as collection of some of mine playbooks, that could be of interest for others as well (after cleaning up...)

## Topics

### Solaar for Logitech wireless input devices
During COVID-19 I got myself a Logitech MX vertical mouse for my home office (aiming for better ergonomics). Since the support by Logitech for its unifying reciever and bluetooth device features on Linux is not very satisfactory, I had been locking for alternatives and stumbled over [Solaar](https://pwr-solaar.github.io/Solaar/)

Since no prebuild packages are around for my Fedora (33 as of writing), I wrote a playbook (all local on my noptebook) to pull the Solaar repo to /var/spool/ansible/Solaar and install it from there

```
ansible-playbook Solaar.pb/Logitech_solaar.yaml
```