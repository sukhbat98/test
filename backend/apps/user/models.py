from django.db import models

# Create your models here.
from django.core import validators
# from django.contrib.gis.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.deconstruct import deconstructible


@deconstructible
class UserRegistratioinNumberValidator(validators.RegexValidator):
    RE_REGISTER = r'[А-Яа-я]{2}[0-9]{8}'
    regex = RE_REGISTER
    message = '''
        Регистрийн дугаараа зөв оруулна уу! \n
        Жишээлбэл: АБ12345678
    '''
    flags = 0


class User(AbstractUser):
    """ Хэрэглэгчийн мэдээлэл """

    register_validator = UserRegistratioinNumberValidator()

    email = models.EmailField(unique=True)

    register = models.CharField(
        max_length=10,
        null=True,
        validators=[register_validator],
    )

    phone_number = models.PositiveIntegerField(null=True, verbose_name="Утасны дугаар")
