# https://askbot.fedoraproject.org/en/question/34470/virtual-box-on-fedora-19-fails-to-start-a-vm/
[ req ]
days = 36500
default_bits = 4096
#specify the section defining the requested distinguished name
distinguished_name = {{ ca_distinguished_name }}
prompt = no
string_mask = utf8only
#Specify the section that defines extensions to add to a self-signed certificate.
x509_extensions = myexts
encrypt_key = no

[ {{ ca_distinguished_name }} ]
countryName = xy
organizationName = {{ ca_distinguished_name }} Inc
commonName = {{ ca_distinguished_name }}
emailAddress = {{ ca_distinguished_name }}@null.null

[ myexts ]
basicConstraints=critical,CA:FALSE
keyUsage=digitalSignature
subjectKeyIdentifier=hash
authorityKeyIdentifier=keyid
