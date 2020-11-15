from jinja2.exceptions import TemplateSyntaxError
from staticjinja import Site
from distutils.dir_util import copy_tree

if __name__ == "__main__":
	copy_tree('static', 'dst')
	site = Site.make_site(
		searchpath = 'src',
		outpath = 'dst')
	try:
		site.render()
	except TemplateSyntaxError as error:
		print('Template syntax error:', error.filename, 'line', error.lineno)
		print(error.message)