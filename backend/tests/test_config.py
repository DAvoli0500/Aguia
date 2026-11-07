from app.config import normalize_database_url


def test_converts_legacy_postgres_scheme():
    url = 'postgres://user:pass@host:5432/db'

    assert normalize_database_url(url) == 'postgresql://user:pass@host:5432/db'


def test_keeps_other_urls_untouched():
    assert normalize_database_url('postgresql://u:p@h/db') == 'postgresql://u:p@h/db'
    assert normalize_database_url('sqlite:///app.db') == 'sqlite:///app.db'
