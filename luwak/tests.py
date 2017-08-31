import subprocess

from django.test import TestCase, Client

class TestIndex(TestCase):
    def test_index(self):
        client = Client()
        resp = client.get('/')
        html = resp.content.decode('utf8')
        assert 'Hello world' in html
        p = subprocess.Popen(["node", "test.js"], stdin=subprocess.PIPE, stdout=subprocess.PIPE)
        stdout, stderr = p.communicate(html.encode('utf8'))
        assert 'JS Test: OK' in stdout.decode('utf8'), stdout.decode('utf8')
