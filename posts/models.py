from django.db import models

class Post(models.Model):
    
    title = models.CharField(max_length=50)
    image = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    tags = models.CharField(max_length=1000)
    categories = models.ManyToManyField('categories.Categories', related_name="posts")
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name='posts',
        on_delete = models.CASCADE
    )

    def __str__(self):
        return f"{self.title} - {self.image} ({self.owner})"